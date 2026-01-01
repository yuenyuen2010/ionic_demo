import React, { useState, useMemo } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonFooter, 
  IonToolbar, 
  IonButton, 
  IonIcon,
  IonText
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { arrowBackOutline, arrowForwardOutline, refreshOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { lessons } from '../data/lessons';
import Flashcard from '../components/Flashcard';
import CommonHeader from '../components/CommonHeader';
import './Lesson.css';

const Lesson: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const category = useMemo(() => lessons.find(l => l.id === id), [id]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!category) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonText color="danger">{t('lesson.categoryNotFound')}</IonText>
          <IonButton routerLink="/home">{t('lesson.goBack')}</IonButton>
        </IonContent>
      </IonPage>
    );
  }

  const currentCard = category.cards[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === category.cards.length - 1;

  const nextCard = () => {
    if (!isLast) setCurrentIndex(currentIndex + 1);
  };

  const prevCard = () => {
    if (!isFirst) setCurrentIndex(currentIndex - 1);
  };

  const reset = () => {
    setCurrentIndex(0);
  };

  return (
    <IonPage>
      <CommonHeader 
        title={t(category.titleKey)} 
        showBackButton={true} 
        defaultHref="/home" 
      />

      <IonContent className="ion-padding">
        <div className="progress-indicator">
          {t('lesson.cardProgress', { current: currentIndex + 1, total: category.cards.length })}
        </div>

        <Flashcard 
          key={currentCard.id} // Key ensures state resets when card changes
          tagalog={currentCard.tagalog} 
          english={currentCard.english} 
        />

        <div className="instruction">
          <p>{t('lesson.flipInstruction')}</p>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="navigation-buttons">
            <IonButton 
              fill="outline" 
              onClick={prevCard} 
              disabled={isFirst}
            >
              <IonIcon icon={arrowBackOutline} slot="start" />
              {t('lesson.prev')}
            </IonButton>

            {isLast ? (
              <IonButton 
                color="success" 
                onClick={reset}
              >
                <IonIcon icon={refreshOutline} slot="start" />
                {t('lesson.restart')}
              </IonButton>
            ) : (
              <IonButton 
                color="primary" 
                onClick={nextCard}
              >
                {t('lesson.next')}
                <IonIcon icon={arrowForwardOutline} slot="end" />
              </IonButton>
            )}
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Lesson;
