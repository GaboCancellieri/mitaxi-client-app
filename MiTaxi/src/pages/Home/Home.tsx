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
import maps from "../../../public/images/maps.png";
import styles from "./home.module.scss";
import { Typography } from "../../components/common";
import AccessShortcuts from "./components/AccessShortcut";
import Features from "./components/Features";
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

      <IonContent>
      <div className="ion-padding">
          <Typography variant="smallTitle">Titulo no se </Typography>
        </div>
        <IonCard className={styles.viaje} onClick={handleCardClick}>
          <Typography variant="smallTitle">¿A dónde quieres ir?</Typography>
          <img src={maps} alt="imagen Google Maps" style={{ width: "100px" }} />
        </IonCard>
        <div className="ion-padding">
          <Typography variant="smallTitle">Accesos directos</Typography>
        </div>
        <AccessShortcuts />
        <Features />
        <IonContent>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
