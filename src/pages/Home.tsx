import { useState } from 'react';
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
  IonText
} from '@ionic/react';
import { bookOutline, chevronForwardOutline, informationCircleOutline } from 'ionicons/icons';
import { lessons } from '../data/lessons';
import './Home.css';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const buildDate = new Date(__BUILD_INFO__.time).toLocaleString();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tagalog Anywhere</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
              <IonIcon slot="icon-only" icon={informationCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          className="build-info-modal"
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Build Info</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
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
