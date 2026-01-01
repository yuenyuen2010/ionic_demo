import { useState, useEffect } from 'react';
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
  IonButtons,
  IonButton,
  IonModal,
  IonText,
  IonListHeader,
  IonRadioGroup,
  IonRadio
} from '@ionic/react';
import { bookOutline, chevronForwardOutline, informationCircleOutline, settingsOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { lessons } from '../data/lessons';
import './Home.css';

const themes = [
  { id: 'theme-teal', nameKey: 'themes.teal', color: '#0d9488' },
  { id: 'theme-navy', nameKey: 'themes.navy', color: '#0f2c4c' },
  { id: 'theme-purple', nameKey: 'themes.purple', color: '#7e22ce' },
  { id: 'theme-green', nameKey: 'themes.green', color: '#15803d' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'zh-CN', name: '简体中文' },
];

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-teal');
  
  const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    setCurrentTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('app-theme', themeId);
    document.body.className = themeId;
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{t('common.appTitle')}</IonTitle>
          <IonButtons slot="end">
            <IonButton 
              onClick={() => handleLanguageChange('en')} 
              fill={i18n.language === 'en' ? 'solid' : 'clear'}
              color="light"
            >
              Eng
            </IonButton>
            <IonButton 
              onClick={() => handleLanguageChange('zh-TW')} 
              fill={i18n.language === 'zh-TW' ? 'solid' : 'clear'}
              color="light"
            >
              繁
            </IonButton>
            <IonButton 
              onClick={() => handleLanguageChange('zh-CN')} 
              fill={i18n.language === 'zh-CN' ? 'solid' : 'clear'}
              color="light"
            >
              簡
            </IonButton>
            <IonButton onClick={() => setShowSettings(true)}>
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
            <IonButton onClick={() => setShowBuildInfo(true)}>
              <IonIcon slot="icon-only" icon={informationCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Settings Modal */}
        <IonModal
          isOpen={showSettings}
          onDidDismiss={() => setShowSettings(false)}
          className="settings-modal"
          initialBreakpoint={0.75}
          breakpoints={[0, 0.5, 0.75, 1]}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>{t('home.settings')}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowSettings(false)}>{t('common.close')}</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonListHeader>
              <IonLabel>{t('home.languageSelection')}</IonLabel>
            </IonListHeader>
            <IonRadioGroup value={i18n.language} onIonChange={e => handleLanguageChange(e.detail.value)}>
              {languages.map(lang => (
                <IonItem key={lang.code}>
                  <IonLabel>{lang.name}</IonLabel>
                  <IonRadio slot="end" value={lang.code} />
                </IonItem>
              ))}
            </IonRadioGroup>

            <IonListHeader>
              <IonLabel>{t('home.themeSelection')}</IonLabel>
            </IonListHeader>
            <IonRadioGroup value={currentTheme} onIonChange={e => handleThemeChange(e.detail.value)}>
              {themes.map(theme => (
                <IonItem key={theme.id}>
                  <div 
                    slot="start" 
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      backgroundColor: theme.color,
                      marginRight: '12px'
                    }}
                  />
                  <IonLabel>{t(theme.nameKey)}</IonLabel>
                  <IonRadio slot="end" value={theme.id} />
                </IonItem>
              ))}
            </IonRadioGroup>
          </IonContent>
        </IonModal>

        {/* Build Info Modal */}
        <IonModal
          isOpen={showBuildInfo}
          onDidDismiss={() => setShowBuildInfo(false)}
          className="build-info-modal"
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>{t('common.buildInfo')}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowBuildInfo(false)}>{t('common.close')}</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <div className="ion-padding">
            <IonText>
              <p><strong>{t('common.buildTime')}:</strong> {buildDate}</p>
              <p><strong>{t('common.commitHash')}:</strong> {__BUILD_INFO__.hash}</p>
              <p><strong>{t('common.message')}:</strong><br/>{__BUILD_INFO__.message}</p>
            </IonText>
          </div>
        </IonModal>

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
                <h3>{category.title}</h3>
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
