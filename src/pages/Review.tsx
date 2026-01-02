import React, { useState, useEffect } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonFooter, 
  IonToolbar, 
  IonButton, 
  IonIcon,
} from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import Flashcard from '../components/Flashcard';
import CommonHeader from '../components/CommonHeader';
import { getDueCards, updateCardSRS } from '../utils/srs';
import { Flashcard as FlashcardType } from '../data/lessons';
import './Lesson.css'; // Reuse lesson styles

/**
 * Review Page Component
 * Implements a Spaced Repetition System (SRS) review session.
 * Loads cards that are due for review and allows the user to mark them as remembered or forgotten.
 */
const Review: React.FC = () => {
  const { t } = useTranslation();

  // State for cards pending review
  const [dueCards, setDueCards] = useState<FlashcardType[]>([]);

  // Current index in the dueCards array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flag to indicate if the review session is complete
  const [isFinished, setIsFinished] = useState(false);

  // Helper state to force re-render of Flashcard component (to reset flip state)
  const [cardKey, setCardKey] = useState(0);

  // Load cards on component mount
  useEffect(() => {
    loadDueCards();
  }, []);

  /**
   * Fetches the cards that are due for review from the SRS utility.
   */
  const loadDueCards = () => {
    const cards = getDueCards();
    // Shuffle cards for better review? Optional.
    // For now, just load them as returned by getDueCards.
    setDueCards(cards);
    setCurrentIndex(0);
    setIsFinished(cards.length === 0);
  };

  /**
   * Handles the user's response to a card (Correct/Wrong).
   * Updates the SRS data for the card and moves to the next one.
   * @param isCorrect - Whether the user remembered the card correctly.
   */
  const handleResult = (isCorrect: boolean) => {
    if (currentIndex >= dueCards.length) return;

    const currentCard = dueCards[currentIndex];

    // Update the SRS status (next due date, interval, etc.)
    updateCardSRS(currentCard.id, isCorrect);

    // Move to next card or finish
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCardKey(prev => prev + 1); // Increment key to reset Flashcard flip state
    } else {
      setIsFinished(true);
    }
  };

  const currentCard = dueCards[currentIndex];

  // Render "All Done" screen if finished or no cards due
  if (isFinished || !currentCard) {
    return (
      <IonPage>
        <CommonHeader title={t('review.title')} showBackButton={true} defaultHref="/home" />
        <IonContent className="ion-padding ion-text-center">
          <div style={{ marginTop: '50px' }}>
            <IonIcon icon={checkmarkCircleOutline} color="success" style={{ fontSize: '64px' }} />
            <h2>{t('review.allDone')}</h2>
            <p>{t('review.comeBackLater')}</p>
            <IonButton routerLink="/home" expand="block" className="ion-margin-top">
              {t('review.backToHome')}
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  // Render the Flashcard and SRS buttons
  return (
    <IonPage>
      <CommonHeader title={t('review.title')} showBackButton={true} defaultHref="/home" />

      <IonContent className="ion-padding">
        <div className="progress-indicator">
          {t('review.progress', { current: currentIndex + 1, total: dueCards.length })}
        </div>

        <Flashcard 
          key={`${currentCard.id}-${cardKey}`} // Unique key ensures fresh component state per card
          id={currentCard.id}
          tagalog={currentCard.tagalog} 
          english={currentCard.english}
          zhTW={currentCard.zhTW}
          zhCN={currentCard.zhCN}
          example={currentCard.example}
        />

        <div className="instruction">
          <p>{t('review.instruction')}</p>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="navigation-buttons">
            {/* Wrong Button - resets progress for this card */}
            <IonButton 
              color="danger" 
              onClick={() => handleResult(false)}
              className="review-btn"
            >
              <IonIcon icon={closeCircleOutline} slot="start" />
              {t('review.wrong')}
              <br/>
              <small style={{ fontSize: '0.7em', marginLeft: '5px' }}>(10m)</small>
            </IonButton>

            {/* Correct Button - schedules card for later */}
            <IonButton 
              color="success" 
              onClick={() => handleResult(true)}
              className="review-btn"
            >
              <IonIcon icon={checkmarkCircleOutline} slot="start" />
              {t('review.correct')}
              <br/>
              <small style={{ fontSize: '0.7em', marginLeft: '5px' }}>(3d)</small>
            </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Review;
