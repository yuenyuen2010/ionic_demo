import React, { useState } from 'react';
import { IonIcon, IonButton } from '@ionic/react';
import { volumeHighOutline } from 'ionicons/icons';
import './Flashcard.css';

interface FlashcardProps {
  tagalog: string;
  english: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ tagalog, english }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = (event: React.MouseEvent, text: string, lang: string) => {
    event.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
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
