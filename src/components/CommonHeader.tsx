import React, { useState, useEffect } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonModal,
  IonContent,
  IonListHeader,
  IonLabel,
  IonRadioGroup,
  IonItem,
  IonRadio,
  IonText
} from '@ionic/react';
import { settingsOutline, chatbubblesOutline, timeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useTimer } from '../context/TimerContext';
import './CommonHeader.css';

interface CommonHeaderProps {
  title: string;
  showBackButton?: boolean;
  defaultHref?: string;
}

const themes = [
  { id: 'theme-teal', nameKey: 'home.themes.teal', color: '#0d9488' },
  { id: 'theme-navy', nameKey: 'home.themes.navy', color: '#0f2c4c' },
  { id: 'theme-purple', nameKey: 'home.themes.purple', color: '#7e22ce' },
  { id: 'theme-green', nameKey: 'home.themes.green', color: '#15803d' },
];

const languages = [
  { code: 'en', name: 'English', shortName: 'EN' },
  { code: 'zh-TW', name: '繁體中文', shortName: '繁' },
  { code: 'zh-CN', name: '简体中文', shortName: '簡' },
];

const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBackButton = false, defaultHref = '/' }) => {
  const { t, i18n } = useTranslation();
  const { formattedTime } = useTimer();
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-teal');

  const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    setCurrentTheme(savedTheme);
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
    <>
      <IonHeader className="ion-no-border common-header">
        <IonToolbar style={{
          '--background': 'var(--pod-bg)',
          border: 'var(--pod-border)',
          borderRadius: 'var(--pod-radius)',
          boxShadow: 'var(--luminous-shadow)',
          padding: '4px 8px'
        }}>
          {showBackButton && (
            <IonButtons slot="start">
              <IonBackButton defaultHref={defaultHref} text="" style={{ '--color': '#64748b' }} />
            </IonButtons>
          )}
          <IonTitle>
            <div className="header-title-container">
              <div style={{ padding: '8px', background: 'var(--glow-indigo)', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 12px var(--glow-indigo-soft)', transform: 'rotate(-3deg)' }}>
                <IonIcon icon={chatbubblesOutline} style={{ color: 'white', fontSize: '20px' }} />
              </div>
              {title}
            </div>
          </IonTitle>
          <IonButtons slot="end">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.6)',
              padding: '4px 8px',
              borderRadius: '12px',
              marginRight: '8px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <IonIcon icon={timeOutline} style={{ fontSize: '16px', color: '#64748b', marginRight: '4px' }} />
              <IonText style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                {formattedTime}
              </IonText>
            </div>
            <div className="language-switcher-container">
              {languages.map(lang => (
                <IonButton
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  size="small"
                  style={{
                    '--background': i18n.language === lang.code ? 'white' : 'transparent',
                    '--color': i18n.language === lang.code ? 'var(--glow-indigo)' : '#94a3b8',
                    '--box-shadow': i18n.language === lang.code ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                    '--border-radius': '10px',
                    margin: 0,
                    height: '32px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0 14px'
                  }}
                >
                  {lang.shortName}
                </IonButton>
              ))}
            </div>
            <IonButton onClick={() => setShowSettings(true)} style={{ '--color': '#94a3b8' }}>
              <IonIcon slot="icon-only" icon={settingsOutline} style={{ fontSize: '22px' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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
            <p><strong>{t('common.message')}:</strong><br />{__BUILD_INFO__.message}</p>
          </IonText>
        </div>
      </IonModal>
    </>
  );
};

export default CommonHeader;
