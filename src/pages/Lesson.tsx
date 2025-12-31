import React, { useState, useMemo } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonFooter, 
  IonButton, 
  IonIcon,
  IonText
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { arrowBackOutline, arrowForwardOutline, refreshOutline } from 'ionicons/icons';
import { lessons } from '../data/lessons';
import Flashcard from '../components/Flashcard';
import './Lesson.css';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = useMemo(() => lessons.find(l => l.id === id), [id]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!category) {
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonText color="danger">Category not found</IonText>
          <IonButton routerLink="/home">Go Back</IonButton>
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
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{category.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="progress-indicator">
          Card {currentIndex + 1} of {category.cards.length}
        </div>

        <Flashcard 
          key={currentCard.id} // Key ensures state resets when card changes
          tagalog={currentCard.tagalog} 
          english={currentCard.english} 
        />

        <div className="instruction">
          <p>Flip the card to see the translation</p>
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
              Prev
            </IonButton>

            {isLast ? (
              <IonButton 
                color="success" 
                onClick={reset}
              >
                <IonIcon icon={refreshOutline} slot="start" />
                Restart
              </IonButton>
            ) : (
              <IonButton 
                color="primary" 
                onClick={nextCard}
              >
                Next
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

