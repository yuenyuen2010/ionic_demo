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
import { lessons } from '../data/lessons';
import './Home.css';

const themes = [
  { id: 'theme-teal', name: 'Modern Teal (Default)', color: '#0d9488' },
  { id: 'theme-navy', name: 'Professional Navy', color: '#0f2c4c' },
  { id: 'theme-purple', name: 'Energetic Purple', color: '#7e22ce' },
  { id: 'theme-green', name: 'Calm Green', color: '#15803d' },
];

const Home: React.FC = () => {
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
    // Close modal after selection for better UX, or keep open? 
    // Let's keep open so they can see the change immediately.
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tagalog Anywhere</IonTitle>
          <IonButtons slot="end">
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
          initialBreakpoint={0.5}
          breakpoints={[0, 0.5, 0.75]}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Settings</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowSettings(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonListHeader>
              <IonLabel>Theme Selection</IonLabel>
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
                  <IonLabel>{theme.name}</IonLabel>
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
              <IonTitle>Build Info</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowBuildInfo(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <div className="ion-padding">
            <IonText>
              <p><strong>Build Time:</strong> {buildDate}</p>
              <p><strong>Commit Hash:</strong> {__BUILD_INFO__.hash}</p>
              <p><strong>Message:</strong><br/>{__BUILD_INFO__.message}</p>
            </IonText>
          </div>
        </IonModal>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tagalog Anywhere</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding">
          <h2>Choose a Topic</h2>
          <p>Select a category to start learning.</p>
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
                <p>{category.cards.length} cards</p>
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
