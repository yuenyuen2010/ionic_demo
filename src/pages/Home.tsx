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
  IonSearchbar,
  IonButton,
  IonListHeader
} from '@ionic/react';
import { bookOutline, chevronForwardOutline, timeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { lessons, LessonGroup } from '../data/lessons';
import { getSRSStats } from '../utils/srs';
import CommonHeader from '../components/CommonHeader';
import './Home.css';

/**
 * Home Page Component
 * Displays the list of lesson categories grouped by their type.
 * Allows users to search for specific lessons or words.
 */
const Home: React.FC = () => {
  // i18n hook for translation
  const { t } = useTranslation();

  // State for search input text
  const [searchText, setSearchText] = useState('');

  // State for the number of cards due for review
  const [dueCount, setDueCount] = useState(0);

  // Effect to load SRS stats when the component mounts
  React.useEffect(() => {
    const stats = getSRSStats();
    setDueCount(stats.dueCount);
  }, []);

  /**
   * Filters the lessons based on the search text.
   */
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

  // Group lessons by their 'group' property
  const groupedLessons = filteredLessons.reduce((groups, lesson) => {
    const group = lesson.group;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(lesson);
    return groups;
  }, {} as Record<LessonGroup, typeof lessons>);

  // Define the order of groups for display
  const groupOrder: LessonGroup[] = ['basics', 'daily_life', 'social', 'conversational', 'grammar', 'advanced'];

  return (
    <IonPage>
      {/* Header Component */}
      <CommonHeader title={t('common.appTitle')} />

      <IonContent fullscreen>
        {/* Collapsible header for iOS style */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('common.appTitle')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding-start ion-padding-end ion-padding-top">
          {/* Review Button - Shows count of cards due for review */}
          <IonButton routerLink="/review" expand="block" color="warning" className="ion-margin-bottom">
            <IonIcon icon={timeOutline} slot="start" />
            {t('home.reviewDue')} ({t('home.dueCount', { count: dueCount })})
          </IonButton>

          <h2>{t('home.chooseTopic')}</h2>
          <p>{t('home.selectCategory')}</p>
        </div>

        {/* Search Bar for filtering lessons */}
        <IonSearchbar 
          value={searchText} 
          onIonInput={e => setSearchText(e.detail.value!)} 
          placeholder={t('home.searchPlaceholder')}
          className="ion-padding-horizontal"
        />

        {/* List of Lesson Categories Grouped */}
        <IonList inset={false}>
          {filteredLessons.length > 0 ? (
            groupOrder.map(groupKey => {
              const groupLessons = groupedLessons[groupKey];
              if (!groupLessons || groupLessons.length === 0) return null;

              return (
                <React.Fragment key={groupKey}>
                  <IonListHeader>
                    <IonLabel className="ion-text-uppercase font-bold">
                      {t(`groups.${groupKey}`)}
                    </IonLabel>
                  </IonListHeader>
                  {groupLessons.map((category) => (
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
                </React.Fragment>
              );
            })
          ) : (
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
