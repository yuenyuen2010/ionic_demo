import React, { useState } from 'react';
import { IonIcon, IonButton, IonSpinner } from '@ionic/react';
import { volumeHighOutline } from 'ionicons/icons';
import './Flashcard.css';

interface FlashcardProps {
  tagalog: string;
  english: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ tagalog, english }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async (event: React.MouseEvent, text: string, lang: string) => {
    event.stopPropagation();
    
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      // Try Google Translate TTS API first for better pronunciation
      // Use 'tl-PH' for Tagalog to explicitly request Philippines accent if supported
      // Use 'gtx' client which often provides better quality/stability
      const googleLang = lang === 'tl-PH' ? 'tl-PH' : 'en-US';
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${googleLang}&q=${encodeURIComponent(text)}`;
      
      const audio = new Audio(audioUrl);
      
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve();
        audio.onerror = () => reject('Audio playback failed');
        audio.play().catch(reject);
      });

    } catch (error) {
      console.warn('Google TTS failed, falling back to Web Speech API', error);
      
      // Fallback to Web Speech API
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Try to find a specific native voice for fallback
        if (lang === 'tl-PH') {
           const voices = window.speechSynthesis.getVoices();
           const nativeVoice = voices.find(v => v.lang === 'tl-PH' || v.lang === 'fil-PH' || v.name.includes('Tagalog') || v.name.includes('Filipino'));
           if (nativeVoice) utterance.voice = nativeVoice;
        }

        utterance.lang = lang;
        utterance.rate = 0.9;
        
        await new Promise<void>((resolve) => {
          utterance.onend = () => resolve();
          utterance.onerror = () => resolve(); // Resolve even on error to reset state
          window.speechSynthesis.speak(utterance);
        });
      }
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <IonButton 
            fill="clear" 
            className="audio-btn" 
            onClick={(e) => playAudio(e, tagalog, 'tl-PH')}
            disabled={isPlaying}
          >
             {isPlaying ? <IonSpinner name="dots" color="light" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />}
          </IonButton>
          <h2>{tagalog}</h2>
          <p>Tap to see translation</p>
        </div>
        <div className="flashcard-back">
          <IonButton 
            fill="clear" 
            className="audio-btn" 
            onClick={(e) => playAudio(e, english, 'en-US')}
            disabled={isPlaying}
          >
             {isPlaying ? <IonSpinner name="dots" color="light" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />}
          </IonButton>
          <h2>{english}</h2>
          <p>Tap to see Tagalog</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
