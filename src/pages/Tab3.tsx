import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="custom-color" style={{ 'backgroundColor': '#E65A7B', 'color': '#fff' }}>
          <IonTitle>Settings</IonTitle>
          <IonLabel slot='end'><em className="icon ni ni-list-thumb-alt px-4" style={{ 'fontSize': '24px' }}></em></IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        -
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
