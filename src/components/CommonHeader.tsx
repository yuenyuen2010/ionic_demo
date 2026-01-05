import React, { useState, useEffect } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonModal,
  IonRadioGroup,
  IonRadio,
  IonText
} from '@ionic/react';
import { settingsOutline, chatbubblesOutline, timeOutline, informationCircleOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { useTimer } from '../context/TimerContext';
import './CommonHeader.css';

interface CommonHeaderProps {
  /** Title to display in the header. */
  title: string;
  /** Whether to show the back button. Defaults to false. */
  showBackButton?: boolean;
  /** The route to navigate to when back button is clicked. Defaults to '/'. */
  defaultHref?: string;
}

// Available color themes for the application
const themes = [
  { id: 'theme-teal', nameKey: 'home.themes.teal', color: '#0d9488' },
  { id: 'theme-navy', nameKey: 'home.themes.navy', color: '#0f2c4c' },
  { id: 'theme-purple', nameKey: 'home.themes.purple', color: '#7e22ce' },
  { id: 'theme-green', nameKey: 'home.themes.green', color: '#15803d' },
];

// Available languages
const languages = [
  { code: 'en', name: 'English', shortName: 'EN' },
  { code: 'zh-TW', name: '繁體中文', shortName: '繁' },
  { code: 'zh-CN', name: '简体中文', shortName: '簡' },
];

/**
 * CommonHeader Component.
 *
 * Displays the application header with:
 * - Title and Logo
 * - Study Timer
 * - Language Switcher
 * - Settings and Build Info Buttons
 *
 * Handles theme switching and language changing via modals.
 */
const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBackButton = false, defaultHref = '/' }) => {
  const { t, i18n } = useTranslation();
  const { formattedTime } = useTimer();

  // State for controlling modals
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-teal');

  // Format build date from global define
  const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'theme-teal';
    setCurrentTheme(savedTheme);
  }, []);

  /**
   * Updates the application theme.
   * Applies class to body and saves to localStorage.
   */
  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('app-theme', themeId);
    document.body.className = themeId;
  };

  /**
   * Updates the application language.
   * Changes i18next language and saves preference.
   */
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
          {/* Left Side: Back Button & Title */}
          <IonButtons slot="start" style={{ alignItems: 'center' }}>
            {showBackButton && (
              <IonBackButton defaultHref={defaultHref} text="" style={{ '--color': '#64748b', marginRight: '8px' }} />
            )}
            <div className="header-title-container" style={{ marginLeft: showBackButton ? '0px' : '4px' }}>
              <div style={{ padding: '8px', background: 'var(--glow-indigo)', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 12px var(--glow-indigo-soft)', transform: 'rotate(-3deg)' }}>
                <IonIcon icon={chatbubblesOutline} style={{ color: 'white', fontSize: '20px' }} />
              </div>
              {title}
            </div>
          </IonButtons>

          {/* Right Side: Timer, Language, Settings */}
          <IonButtons slot="end">
            {/* Study Timer Display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.6)',
              padding: '4px 8px',
              borderRadius: '12px',
              marginRight: '8px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <IonText className="todays-learning-text" style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', marginRight: '6px' }}>
                {t('common.todaysLearning')}
              </IonText>
              <IonIcon icon={timeOutline} style={{ fontSize: '16px', color: '#64748b', marginRight: '4px' }} />
              <IonText style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                {formattedTime}
              </IonText>
            </div>

            {/* Language Switcher Buttons */}
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

            {/* Info & Settings Icons */}
            <IonButton onClick={() => setShowBuildInfo(true)} style={{ '--color': '#94a3b8' }}>
              <IonIcon slot="icon-only" icon={informationCircleOutline} style={{ fontSize: '22px' }} />
            </IonButton>
            <IonButton onClick={() => setShowSettings(true)} style={{ '--color': '#94a3b8' }}>
              <IonIcon slot="icon-only" icon={settingsOutline} style={{ fontSize: '22px' }} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Settings Modal: Language & Theme Selection */}
      <IonModal
        isOpen={showSettings}
        onDidDismiss={() => setShowSettings(false)}
        className="settings-modal"
        initialBreakpoint={0.85}
        breakpoints={[0, 0.5, 0.85, 1]}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{t('home.settings')}</h2>
            <IonButton fill="clear" onClick={() => setShowSettings(false)} className="modal-close-btn">
              {t('common.close')}
            </IonButton>
          </div>

          <div className="modal-body">
            {/* Language Section */}
            <div className="settings-section">
              <h3 className="section-title">{t('home.languageSelection')}</h3>
              <div className="settings-card">
                <IonRadioGroup value={i18n.language} onIonChange={e => handleLanguageChange(e.detail.value)}>
                  {languages.map((lang, idx) => (
                    <div key={lang.code} className={`settings-item ${idx !== languages.length - 1 ? 'bordered' : ''}`}>
                      <span className="item-label">{lang.name}</span>
                      <IonRadio value={lang.code} />
                    </div>
                  ))}
                </IonRadioGroup>
              </div>
            </div>

            {/* Theme Section */}
            <div className="settings-section">
              <h3 className="section-title">{t('home.themeSelection')}</h3>
              <div className="settings-card">
                <IonRadioGroup value={currentTheme} onIonChange={e => handleThemeChange(e.detail.value)}>
                  {themes.map((theme, idx) => (
                    <div key={theme.id} className={`settings-item ${idx !== themes.length - 1 ? 'bordered' : ''}`}>
                      <div className="theme-item">
                        <div className="theme-swatch" style={{ backgroundColor: theme.color }} />
                        <span className="item-label">{t(theme.nameKey)}</span>
                      </div>
                      <IonRadio value={theme.id} />
                    </div>
                  ))}
                </IonRadioGroup>
              </div>
            </div>
          </div>
        </div>
      </IonModal>

      {/* Build Info Modal: Version & Commit Details */}
      <IonModal
        isOpen={showBuildInfo}
        onDidDismiss={() => setShowBuildInfo(false)}
        className="build-info-modal"
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 0.75]}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{t('common.buildInfo')}</h2>
            <IonButton fill="clear" onClick={() => setShowBuildInfo(false)} className="modal-close-btn">
              {t('common.close')}
            </IonButton>
          </div>

          <div className="modal-body">
            <div className="info-card">
              <div className="info-row">
                <span className="info-label">{t('common.version')}</span>
                <span className="info-value version-badge">{__BUILD_INFO__.version}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('common.buildTime')}</span>
                <span className="info-value">{buildDate}</span>
              </div>
              <div className="info-row">
                <span className="info-label">{t('common.commitHash')}</span>
                <span className="info-value mono">{__BUILD_INFO__.hash}</span>
              </div>
            </div>

            <div className="commit-message">
              <span className="info-label">{t('common.message')}</span>
              <p className="message-text">{__BUILD_INFO__.message}</p>
            </div>
          </div>
        </div>
      </IonModal>
    </>
  );
};

export default CommonHeader;
