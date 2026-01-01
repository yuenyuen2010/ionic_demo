import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon
} from '@ionic/react';
import { bookOutline, chevronForwardOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { lessons } from '../data/lessons';
import CommonHeader from '../components/CommonHeader';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <CommonHeader title={t('common.appTitle')} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('common.appTitle')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding">
          <h2>{t('home.chooseTopic')}</h2>
          <p>{t('home.selectCategory')}</p>
        </div>

        <IonList inset={false}>
          {lessons.map((category) => (
            <IonItem 
              key={category.id} 
              routerLink={`/lesson/${category.id}`}
              detail={false}
            >
              <IonIcon icon={bookOutline} slot="start" color="primary" />
              <IonLabel>
                <h3>{t(category.titleKey)}</h3>
                <p>{t('home.cardsCount', { count: category.cards.length })}</p>
              </IonLabel>
              <IonIcon icon={chevronForwardOutline} slot="end" />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
