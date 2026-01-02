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
import { getBookmarks } from '../utils/bookmarks';
import './Lesson.css';

/**
 * Lesson Page Component
 * Displays a sequence of flashcards for a specific category.
 * Users can navigate through the cards using Next/Previous buttons.
 */
const Lesson: React.FC = () => {
  const { t } = useTranslation();
  // Retrieve the lesson category ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // Find the category object based on the ID. Memoized to avoid re-searching on every render.
  const category = useMemo(() => {
    if (id === 'bookmarks') {
      const bookmarkedIds = getBookmarks();
      const bookmarkedCards = lessons.flatMap(l => l.cards).filter(c => bookmarkedIds.includes(c.id));

      return {
        id: 'bookmarks',
        title: 'Bookmarks',
        titleKey: 'bookmarks.title',
        group: 'bookmarks',
        groupKey: 'bookmarks',
        cards: bookmarkedCards
      };
    }
    return lessons.find(l => l.id === id);
  }, [id]);
  
  // State to track the index of the current card being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // If category is invalid, show an error message
  if (!category || (category.id === 'bookmarks' && category.cards.length === 0)) {
    if (category?.id === 'bookmarks') {
      return (
        <IonPage>
          <CommonHeader title={t('bookmarks.title')} showBackButton={true} defaultHref="/home" />
          <IonContent className="ion-padding">
            <div className="ion-text-center ion-padding">
              <IonText color="medium">
                <p>{t('bookmarks.empty')}</p>
              </IonText>
              <IonButton routerLink="/home">{t('lesson.goBack')}</IonButton>
            </div>
          </IonContent>
        </IonPage>
      );
    }
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonText color="danger">{t('lesson.categoryNotFound')}</IonText>
          <IonButton routerLink="/home">{t('lesson.goBack')}</IonButton>
        </IonContent>
      </IonPage>
    );
  }

  // Current card data
  const currentCard = category.cards[currentIndex];

  // Navigation state helpers
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === category.cards.length - 1;

  /** Move to the next card */
  const nextCard = () => {
    if (!isLast) setCurrentIndex(currentIndex + 1);
  };

  /** Move to the previous card */
  const prevCard = () => {
    if (!isFirst) setCurrentIndex(currentIndex - 1);
  };

  /** Restart the lesson from the beginning */
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
        {/* Progress Indicator (e.g., 1/10) */}
        <div className="progress-indicator">
          {t('lesson.cardProgress', { current: currentIndex + 1, total: category.cards.length })}
        </div>

        {/* Flashcard Component */}
        <Flashcard 
          key={currentCard.id} // Key ensures React remounts the component when card changes (resets flip state)
          id={currentCard.id}
          tagalog={currentCard.tagalog} 
          english={currentCard.english}
          zhTW={currentCard.zhTW}
          zhCN={currentCard.zhCN}
          example={currentCard.example}
        />

        <div className="instruction">
          <p>{t('lesson.flipInstruction')}</p>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar>
          <div className="navigation-buttons">
            {/* Previous Button */}
            <IonButton 
              fill="outline" 
              onClick={prevCard} 
              disabled={isFirst}
            >
              <IonIcon icon={arrowBackOutline} slot="start" />
              {t('lesson.prev')}
            </IonButton>

            {/* Next or Restart Button */}
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
