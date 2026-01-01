import React, { useState, useEffect } from 'react';
import { IonIcon, IonButton } from '@ionic/react';
import { volumeHighOutline } from 'ionicons/icons';
import './Flashcard.css';

interface FlashcardProps {
  tagalog: string;
  english: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ tagalog, english }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const playAudio = (event: React.MouseEvent, text: string, lang: string) => {
    event.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Improved voice selection logic
      let voice: SpeechSynthesisVoice | undefined;

      if (lang === 'tl-PH') {
        // Priority search for Tagalog/Filipino voices
        // 1. Exact match for 'tl-PH' or 'fil-PH'
        voice = voices.find(v => v.lang === 'tl-PH' || v.lang === 'fil-PH');
        
        // 2. Loose match for 'tl' or 'fil' language codes
        if (!voice) {
          voice = voices.find(v => v.lang.startsWith('tl') || v.lang.startsWith('fil'));
        }
        
        // 3. Match by name (e.g., "Google Tagalog", "Microsoft Filipino")
        if (!voice) {
          voice = voices.find(v => 
            v.name.toLowerCase().includes('tagalog') || 
            v.name.toLowerCase().includes('filipino')
          );
        }
      } else {
        // Standard selection for English
        voice = voices.find(v => v.lang === lang);
      }

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang; // Ensure lang matches voice
      } else {
        utterance.lang = lang; // Fallback to requested lang
      }

      utterance.rate = 0.9; // Slightly slower for clarity
      window.speechSynthesis.speak(utterance);
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
          >
            <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />
          </IonButton>
          <h2>{tagalog}</h2>
          <p>Tap to see translation</p>
        </div>
        <div className="flashcard-back">
          <IonButton 
            fill="clear" 
            className="audio-btn" 
            onClick={(e) => playAudio(e, english, 'en-US')}
          >
            <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />
          </IonButton>
          <h2>{english}</h2>
          <p>Tap to see Tagalog</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
