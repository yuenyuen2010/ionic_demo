import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/react';
import {
  bookOutline,
  timeOutline,
  starOutline,
  happyOutline,
  peopleOutline,
  chatbubblesOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import './Intro.css';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{t('intro.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="intro-container">
        <div className="intro-header">
          <h1>{t('intro.title')}</h1>
          <p>{t('intro.subtitle')}</p>
        </div>

        <div className="intro-content">
          <IonCard className="intro-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={bookOutline} className="intro-icon" />
                {t('intro.whatIsTitle')}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {t('intro.whatIsContent')}
            </IonCardContent>
          </IonCard>

          <IonCard className="intro-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={timeOutline} className="intro-icon" />
                {t('intro.historyTitle')}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {t('intro.historyContent')}
            </IonCardContent>
          </IonCard>

          <h2 className="section-title">{t('intro.featuresTitle')}</h2>

          <IonCard className="intro-card feature-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={chatbubblesOutline} className="intro-icon" />
                {t('intro.feature1Title')}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {t('intro.feature1Content')}
            </IonCardContent>
          </IonCard>

          <IonCard className="intro-card feature-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={peopleOutline} className="intro-icon" />
                {t('intro.feature2Title')}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {t('intro.feature2Content')}
            </IonCardContent>
          </IonCard>

          <IonCard className="intro-card feature-card">
             <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={peopleOutline} className="intro-icon" />
                {t('intro.feature3Title')}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {t('intro.feature3Content')}
            </IonCardContent>
           </IonCard>

          <h2 className="section-title">{t('intro.funFactsTitle')}</h2>

          <IonCard className="intro-card fun-fact-card">
            <IonCardContent>
              <div className="fun-fact-item">
                <IonIcon icon={happyOutline} />
                <p>{t('intro.fact1')}</p>
              </div>
              <div className="fun-fact-item">
                <IonIcon icon={starOutline} />
                <p>{t('intro.fact2')}</p>
              </div>
              <div className="fun-fact-item">
                <IonIcon icon={chatbubblesOutline} />
                <p>{t('intro.fact3')}</p>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
