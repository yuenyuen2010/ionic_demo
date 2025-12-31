import React, { useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  tagalog: string;
  english: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ tagalog, english }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h2>{tagalog}</h2>
          <p>Tap to see translation</p>
        </div>
        <div className="flashcard-back">
          <h2>{english}</h2>
          <p>Tap to see Tagalog</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

