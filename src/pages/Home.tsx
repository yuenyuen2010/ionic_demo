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
  IonListHeader,
  IonAccordionGroup,
  IonAccordion
} from '@ionic/react';
import {
  bookOutline,
  chevronForwardOutline,
  arrowBackOutline,
  timeOutline,
  appsOutline,
  createOutline,
  homeOutline,
  peopleOutline,
  chatbubblesOutline,
  bookmarkOutline,
  informationCircleOutline,
  gameControllerOutline,
  gridOutline,
  pencilOutline,
  shuffleOutline
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { lessons } from '../data/lessons';
import { getSRSStats } from '../utils/srs';
import CommonHeader from '../components/CommonHeader';
import './Home.css';

/**
 * Home Page Component
 * Displays the list of lesson categories and the current status of reviews.
 * Allows users to search for specific lessons or words.
 */
const Home: React.FC = () => {
  // i18n hook for translation
  const { t } = useTranslation();

  // State for search input text
  const [searchText, setSearchText] = useState('');

  // State for the number of cards due for review
  const [dueCount, setDueCount] = useState(0);

  // State for the currently selected group (for drill-down)
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  // Effect to load SRS stats when the component mounts
  // Note: Ideally should useIonViewWillEnter but that requires refactoring to useIonViewWillEnter hook or standard Effect if re-mount happens
  React.useEffect(() => {
    const stats = getSRSStats();
    setDueCount(stats.dueCount);
  }, []);

  /**
   * Filters the lessons based on the search text.
   * Matches against category title or any content (Tagalog/English/Chinese) within the cards.
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

  // Group lessons by groupKey
  const groupedLessons = filteredLessons.reduce((acc, category) => {
    const groupKey = category.groupKey || 'groups.basics';
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(category);
    return acc;
  }, {} as Record<string, typeof lessons>);

  // Define group order if not searching
  const groupOrder = ['groups.basics', 'groups.daily_life', 'groups.social', 'groups.grammar'];

  // Icon map for groups
  const groupIcons: Record<string, string> = {
    'groups.basics': appsOutline,
    'groups.daily_life': homeOutline,
    'groups.social': peopleOutline,
    'groups.grammar': createOutline
  };

  const sortedGroupKeys = Object.keys(groupedLessons).sort((a, b) => {
    const indexA = groupOrder.indexOf(a);
    const indexB = groupOrder.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  return (
    <IonPage>
      {/* Header Component */}
      <CommonHeader title={t('common.appTitle')} />

      <IonContent fullscreen className="home-container">
        {/* Ambient Immersive Header */}
        {!selectedGroup && !searchText && (
          <div className="ambient-header fade-in-up">
            <h1>{t('home.welcome')}</h1>
            <p>{t('home.subtitle')}</p>
          </div>
        )}

        <div className="pod-dashboard">
          {/* Primary Actions Grid - Review, Bookmarks, Intro */}
          {!selectedGroup && !searchText && (
            <div className="primary-grid fade-in-up">
              {/* Review Pod */}
              <div className="learning-pod pod-hero" onClick={() => window.location.hash = '/review'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('home.reviewDue')}</div>
                    <h2 className="pod-value">{t('home.dueCount', { count: dueCount })}</h2>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>

              {/* Bookmarks Pod */}
              <div className="learning-pod pod-bookmarks" onClick={() => window.location.hash = '/lesson/bookmarks'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('bookmarks.title')}</div>
                    <h2 className="pod-value">{t('bookmarks.pinnedSubtitle')}</h2>
                  </div>
                  <IonIcon icon={bookmarkOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>

              {/* Intro Pod */}
              <div className="learning-pod pod-intro" style={{ background: 'linear-gradient(135deg, #845ec2 0%, #d65db1 100%)' }} onClick={() => window.location.hash = '/intro'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="pod-label">{t('home.introToTagalog')}</div>
                    <h2 className="pod-value">{t('home.introSubtitle')}</h2>
                  </div>
                  <IonIcon icon={informationCircleOutline} style={{ fontSize: '24px', color: 'white' }} />
                </div>
              </div>
            </div>
          )}

          {/* Games Category Section */}
          {!selectedGroup && !searchText && (
            <div className="category-section fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="category-title">{t('home.gamesCategory')}</h3>
              <div className="games-grid">
                {/* Salita Challenge */}
                <div className="learning-pod pod-game" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }} onClick={() => window.location.hash = '/game'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('game.podTitle')}</div>
                      <h2 className="pod-value">{t('game.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={gameControllerOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Memory Match */}
                <div className="learning-pod pod-memory" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)' }} onClick={() => window.location.hash = '/memory'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('memory.podTitle')}</div>
                      <h2 className="pod-value">{t('memory.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={gridOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Spell Challenge */}
                <div className="learning-pod pod-spell" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }} onClick={() => window.location.hash = '/spell'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('spell.podTitle')}</div>
                      <h2 className="pod-value">{t('spell.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={pencilOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>

                {/* Word Scramble */}
                <div className="learning-pod pod-scramble" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }} onClick={() => window.location.hash = '/scramble'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="pod-label">{t('scramble.podTitle')}</div>
                      <h2 className="pod-value">{t('scramble.podSubtitle')}</h2>
                    </div>
                    <IonIcon icon={shuffleOutline} style={{ fontSize: '24px', color: 'white' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Pod - Luminous Interaction */}
          <div className="learning-pod search-pod fade-in-up" style={{ animationDelay: '0.15s' }}>
            <IonSearchbar
              value={searchText}
              onIonInput={e => setSearchText(e.detail.value!)}
              placeholder={t('home.searchPlaceholder')}
              className="luminous-search"
              onIonClear={() => setSearchText('')}
            />
          </div>

          {/* Drill-down / Breadcrumb Navigation */}
          {(selectedGroup || searchText) && (
            <div className="fade-in-up" style={{ padding: '0 4px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              {selectedGroup && !searchText && (
                <IonButton
                  fill="clear"
                  onClick={() => setSelectedGroup(null)}
                  style={{ '--color': '#64748b', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}
                >
                  <IonIcon icon={arrowBackOutline} slot="start" />
                  {t('common.backToCategories')}
                </IonButton>
              )}
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ion-text-color)', letterSpacing: '-0.02em' }}>
                {searchText ? t('home.searchFindings') : t(selectedGroup!)}
              </span>
            </div>
          )}

          {/* Dynamic Content Pod Grid */}
          <div className="pod-grid">
            {searchText ? (
              /* Search Results */
              filteredLessons.map((category, idx) => (
                <div key={category.id} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }} onClick={() => window.location.hash = `/lesson/${category.id}`}>
                  <div className="pod-icon-box"><IonIcon icon={bookOutline} /></div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(category.titleKey)}</h3>
                    <span>{t('home.cardsCount', { count: category.cards.length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
                </div>
              ))
            ) : selectedGroup ? (
              /* Lessons in Selected Category */
              groupedLessons[selectedGroup]?.map((category, idx) => (
                <div key={category.id} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }} onClick={() => window.location.hash = `/lesson/${category.id}`}>
                  <div className="pod-icon-box"><IonIcon icon={bookOutline} /></div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(category.titleKey)}</h3>
                    <span>{t('home.cardsCount', { count: category.cards.length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
                </div>
              ))
            ) : (
              /* Root Categories View */
              sortedGroupKeys.map((groupKey, idx) => (
                <div key={groupKey} className="item-pod fade-in-up" style={{ animationDelay: `${idx * 0.05 + 0.2}s` }} onClick={() => setSelectedGroup(groupKey)}>
                  <div className="pod-icon-box" style={{ background: 'var(--glow-indigo-soft)', color: 'var(--glow-indigo)' }}>
                    <IonIcon icon={groupIcons[groupKey] || appsOutline} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>{t(groupKey)}</h3>
                    <span>{t('home.lessonsCount', { count: groupedLessons[groupKey].length })}</span>
                  </div>
                  <IonIcon icon={chevronForwardOutline} style={{ color: '#cbd5e1' }} />
                </div>
              ))
            )}
          </div>

          {/* Empty Discovery State */}
          {searchText && filteredLessons.length === 0 && (
            <div className="fade-in-up" style={{ textAlign: 'center', padding: '60px 0', opacity: 0.6 }}>
              <IonIcon icon={bookOutline} style={{ fontSize: '48px', marginBottom: '16px' }} />
              <p style={{ fontWeight: 600 }}>{t('home.noResults')}</p>
            </div>
          )}

          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
