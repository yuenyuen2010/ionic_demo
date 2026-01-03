import React, { useState, useEffect } from 'react';
import { IonIcon, IonButton, IonSpinner } from '@ionic/react';
import { volumeHighOutline, bookmarkOutline, bookmark } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';
import './Flashcard.css';

interface Example {
  tagalog: string;
  english: string;
  zhTW: string;
  zhCN: string;
}

interface FlashcardProps {
  id: string;
  tagalog: string;
  english: string;
  zhTW?: string;
  zhCN?: string;
  example?: Example;
}

/**
 * Flashcard Component
 * Displays a card with a front (Tagalog) and back (Translation + Example).
 * Supports flipping animation and text-to-speech audio playback.
 */
const Flashcard: React.FC<FlashcardProps> = ({ id, tagalog, english, zhTW, zhCN, example }) => {
  const { t, i18n } = useTranslation();

  // State to track if the card is currently flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // State to track if audio is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  // State to track if the card is bookmarked
  const [isBookmarkedState, setIsBookmarkedState] = useState(false);

  useEffect(() => {
    setIsBookmarkedState(isBookmarked(id));
  }, [id]);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = toggleBookmark(id);
    setIsBookmarkedState(newState);
  };

  /**
   * Determines the appropriate translation and language code based on the current app language.
   * Defaults to English (en-US).
   */
  const getTranslation = () => {
    switch (i18n.language) {
      case 'zh-TW':
        return { text: zhTW || english, lang: 'zh-TW', example: example?.zhTW || example?.english };
      case 'zh-CN':
        return { text: zhCN || english, lang: 'zh-CN', example: example?.zhCN || example?.english };
      default:
        return { text: english, lang: 'en-US', example: example?.english };
    }
  };

  const translation = getTranslation();

  /**
   * Handles Audio Playback.
   * Attempts to use Google Cloud TTS if an API key is present.
   * Fallbacks to Google Translate unofficial API.
   * Final fallback to browser's native Web Speech API.
   *
   * @param event - The mouse event to stop propagation (prevent card flip)
   * @param text - The text to speak
   * @param lang - The language code
   */
  /**
   * Sanitize text to match audio filename format
   */
  const sanitizeFilename = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[?!.,;:'"()\/\\]/g, '')
      .replace(/\s+/g, '_')
      .trim();
  };

  const playAudio = async (event: React.MouseEvent, text: string, lang: string) => {
    // Prevent the card from flipping when clicking the audio button
    event.stopPropagation();

    if (isPlaying) return;
    setIsPlaying(true);

    try {
      // 1. Local Audio Files (Offline Support) - For Tagalog
      if (lang === 'tl-PH') {
        try {
          const filename = sanitizeFilename(text);
          // Use BASE_URL for correct path in production (e.g., /ionic_demo/)
          const basePath = import.meta.env.BASE_URL || '/';
          const audioPath = `${basePath}audio/${filename}.mp3`;

          const audio = new Audio(audioPath);

          await new Promise<void>((resolve, reject) => {
            audio.onended = () => resolve();
            audio.onerror = () => reject('Local audio not found');
            audio.oncanplaythrough = () => {
              audio.play().catch(reject);
            };
            audio.load();
          });
          return;
        } catch (e) {
          console.warn('Local audio not found, trying online TTS', e);
        }

        // 2. Fallback: Google Cloud TTS Serverless API
        try {
          const response = await fetch('https://tts-server-479744148035.asia-east1.run.app/tts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text,
              languageCode: 'fil-PH',
              voiceName: 'fil-PH-Standard-A',
            }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.audioContent) {
              const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
              await new Promise<void>((resolve, reject) => {
                audio.onended = () => resolve();
                audio.onerror = () => reject('Audio playback failed');
                audio.play().catch(reject);
              });
              return;
            }
          }
        } catch (e) {
          console.warn('Google Cloud TTS Serverless failed, falling back', e);
        }
      }

      // 2. Google Translate TTS (Unofficial API) - Often better pronunciation than native browser
      let googleLang = lang;
      if (lang === 'tl-PH') googleLang = 'tl';

      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${googleLang}&q=${encodeURIComponent(text)}`;

      const audio = new Audio(audioUrl);

      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve();
        audio.onerror = () => reject('Audio playback failed');
        audio.play().catch(reject);
      });

    } catch (error) {
      console.warn('Google TTS failed, falling back to Web Speech API', error);

      // 3. Web Speech API (Native Browser Support)
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
          utterance.onerror = () => resolve();
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
        {/* Front of Card (Tagalog) */}
        <div className="flashcard-front">
          <IonButton
            fill="clear"
            className="audio-btn"
            onClick={(e) => playAudio(e, tagalog, 'tl-PH')}
            disabled={isPlaying}
          >
            {isPlaying ? <IonSpinner name="dots" color="primary" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="primary" />}
          </IonButton>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="primary" />
          </IonButton>
          <h2>{tagalog}</h2>
          <p className="flip-hint">{t('flashcard.tapToSeeTranslation')}</p>
        </div>

        {/* Back of Card (Translation) */}
        <div className="flashcard-back">
          <IonButton
            fill="clear"
            className="audio-btn"
            onClick={(e) => playAudio(e, translation.text, translation.lang)}
            disabled={isPlaying}
          >
            {isPlaying ? <IonSpinner name="dots" color="light" /> : <IonIcon icon={volumeHighOutline} slot="icon-only" color="light" />}
          </IonButton>
          <IonButton
            fill="clear"
            className="bookmark-btn"
            onClick={handleBookmark}
          >
            <IonIcon icon={isBookmarkedState ? bookmark : bookmarkOutline} slot="icon-only" color="light" />
          </IonButton>
          <h2>{translation.text}</h2>

          {example && (
            <div className="example-sentence">
              <p className="example-tagalog">
                {example.tagalog}
              </p>
              <p className="example-translation">
                {translation.example}
              </p>
            </div>
          )}

          {!example && <p className="flip-hint">{t('flashcard.tapToSeeTagalog')}</p>}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
