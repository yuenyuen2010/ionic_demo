import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonFooter,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { checkmarkCircleOutline, trophyOutline, closeCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import Flashcard from '../components/Flashcard';
import CommonHeader from '../components/CommonHeader';
import Footer from '../components/Footer';
import { getSRSStats } from '../utils/srs';
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

  // State for result animation
  const [feedbackClass, setFeedbackClass] = useState('');

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

    // Trigger feedback animation
    setFeedbackClass(isCorrect ? 'success-pop' : 'shake');

    // Clear animation after it finishes
    setTimeout(() => {
      setFeedbackClass('');

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
    }, 450);
  };

  const currentCard = dueCards[currentIndex];

  // Render "All Done" screen if finished or no cards due
  if (isFinished || !currentCard) {
    return (
      <IonPage>
        <CommonHeader title={t('review.title')} showBackButton={true} defaultHref="/home" />
        <IonContent className="ion-padding" style={{ '--background': 'radial-gradient(circle at top, var(--glow-indigo-soft), transparent 80%)' }}>
          <div className="celebration-container fade-in-up" style={{ maxWidth: '440px', margin: '80px auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '32px', padding: '48px 32px', textAlign: 'center', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '80px', height: '80px', background: 'var(--glow-indigo)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 0 30px var(--glow-indigo-soft)', transform: 'rotate(-5deg)' }}>
                <IonIcon icon={checkmarkCircleOutline} style={{ fontSize: '44px', color: 'white' }} />
              </div>

              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.04em', color: 'var(--ion-text-color)' }}>{t('review.impactReport')}</h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '40px', fontWeight: 500 }}>{t('review.impactSubtitle')}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
                <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: 'var(--pod-border)', boxShadow: 'var(--luminous-shadow)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>{t('review.accuracy')}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--glow-indigo)' }}>100%</div>
                </div>
                <div style={{ background: 'white', padding: '24px', borderRadius: '20px', border: 'var(--pod-border)', boxShadow: 'var(--luminous-shadow)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>{t('review.streak')}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--glow-rose)' }}>+5d</div>
                </div>
              </div>

              <IonButton routerLink="/home" expand="block" mode="ios" style={{ '--background': 'var(--glow-indigo)', height: '60px', fontSize: '1.1rem', fontWeight: 800, '--border-radius': '18px', '--box-shadow': '0 15px 30px var(--glow-indigo-soft)' }}>
                {t('review.backToHome')}
              </IonButton>

              <Footer />
            </div>
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
        <div className={`progress-indicator ${feedbackClass}`}>
          {t('review.progress', { current: currentIndex + 1, total: dueCards.length })}
        </div>

        <div className={feedbackClass}>
          <Flashcard
            key={`${currentCard.id}-${cardKey}`} // Unique key ensures fresh component state per card
            id={currentCard.id}
            tagalog={currentCard.tagalog}
            english={currentCard.english}
            zhTW={currentCard.zhTW}
            zhCN={currentCard.zhCN}
            example={currentCard.example}
          />
        </div>

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
              <br />
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
              <br />
              <small style={{ fontSize: '0.7em', marginLeft: '5px' }}>(3d)</small>
            </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Review;
