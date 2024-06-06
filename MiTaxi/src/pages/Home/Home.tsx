import React from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
} from "@ionic/react";
import maps from '../../../public/images/maps.png';
import styles from './home.module.scss';

const Home: React.FC = () => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push("/search");
  };

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className={styles.viaje} onClick={handleCardClick}>
          <p>¿A dónde quieres ir?</p>
          <img src={maps} alt="imagen Google Maps" style={{width:'100px'}} />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
