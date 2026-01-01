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
  useIonAlert
} from '@ionic/react';
import { bookOutline, chevronForwardOutline, informationCircleOutline } from 'ionicons/icons';
import { lessons } from '../data/lessons';
import './Home.css';

const Home: React.FC = () => {
  const [presentAlert] = useIonAlert();

  const showBuildInfo = () => {
    const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();
    presentAlert({
      header: 'Build Info',
      message: `Build Time: ${buildDate}
Commit Hash: ${__BUILD_INFO__.hash}
Message: ${__BUILD_INFO__.message}`,
      buttons: ['OK'],
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tagalog Anywhere</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={showBuildInfo}>
              <IonIcon slot="icon-only" icon={informationCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tagalog Anywhere</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="ion-padding">
          <h2>Choose a Topic</h2>
          <p>Select a category to start learning.</p>
        </div>

        <IonList inset={true}>
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
