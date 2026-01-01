import React, { useState, useEffect } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonFooter, 
  IonToolbar, 
  IonButton, 
  IonIcon,
  IonText
} from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import Flashcard from '../components/Flashcard';
import CommonHeader from '../components/CommonHeader';
import { getDueCards, updateCardSRS } from '../utils/srs';
import { Flashcard as FlashcardType } from '../data/lessons';
import './Lesson.css'; // Reuse lesson styles

const Review: React.FC = () => {
  const { t } = useTranslation();
  const [dueCards, setDueCards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [cardKey, setCardKey] = useState(0); // Force re-render of Flashcard

  useEffect(() => {
    loadDueCards();
  }, []);

  const loadDueCards = () => {
    const cards = getDueCards();
    // Shuffle cards for better review? Optional.
    // For now, just load them.
    setDueCards(cards);
    setCurrentIndex(0);
    setIsFinished(cards.length === 0);
  };

  const handleResult = (isCorrect: boolean) => {
    if (currentIndex >= dueCards.length) return;

    const currentCard = dueCards[currentIndex];
    updateCardSRS(currentCard.id, isCorrect);

    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCardKey(prev => prev + 1); // Reset flip state
    } else {
      setIsFinished(true);
    }
  };

  const currentCard = dueCards[currentIndex];

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

  return (
    <IonPage>
      <CommonHeader title={t('review.title')} showBackButton={true} defaultHref="/home" />

      <IonContent className="ion-padding">
        <div className="progress-indicator">
          {t('review.progress', { current: currentIndex + 1, total: dueCards.length })}
        </div>

        <Flashcard 
          key={`${currentCard.id}-${cardKey}`}
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
