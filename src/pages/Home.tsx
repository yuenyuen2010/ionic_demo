import React, { useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon,
  IonSearchbar
} from '@ionic/react';
import { bookOutline, chevronForwardOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { lessons } from '../data/lessons';
import CommonHeader from '../components/CommonHeader';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');

  const filteredLessons = lessons.filter(category => {
    if (!searchText) return true;
    
    const searchLower = searchText.toLowerCase();
    const title = t(category.titleKey).toLowerCase();
    
    // Check if title matches
    if (title.includes(searchLower)) return true;
    
    // Check if any card content matches
    return category.cards.some(card => 
      card.tagalog.toLowerCase().includes(searchLower) || 
      card.english.toLowerCase().includes(searchLower) ||
      (card.zhTW && card.zhTW.includes(searchText)) ||
      (card.zhCN && card.zhCN.includes(searchText))
    );
  });

  return (
    <IonPage>
      <CommonHeader title={t('common.appTitle')} />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('common.appTitle')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding-start ion-padding-end ion-padding-top">
          <h2>{t('home.chooseTopic')}</h2>
          <p>{t('home.selectCategory')}</p>
        </div>

        <IonSearchbar 
          value={searchText} 
          onIonInput={e => setSearchText(e.detail.value!)} 
          placeholder={t('home.searchPlaceholder')}
          className="ion-padding-horizontal"
        />

        <IonList inset={false}>
          {filteredLessons.map((category) => (
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
          {filteredLessons.length === 0 && (
            <div className="ion-padding ion-text-center">
              <p>{t('home.noResults')}</p>
            </div>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
