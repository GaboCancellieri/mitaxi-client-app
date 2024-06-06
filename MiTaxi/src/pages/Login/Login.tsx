import React from "react";
import { Typography } from "../../components/common/index";
import { IonPage, IonContent, IonButton } from "@ionic/react";

import logo from "../../../public/images/logo.png";
import facebook from "../../../public/images/facebook.png";
import google from "../../../public/images/google.png";
import styles from "./login.module.scss";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="login-content">
        <div className={styles.loginContainer}>
          <div className={styles.loginItems}>
            <div className={styles.loginTitles}>
              <img src={logo} alt="Taxi Logo" className={styles.loginLogo} />
              <Typography variant="largeTitle">MI TAXI</Typography>
              <Typography variant="title">Iniciá Sesión</Typography>
            </div>
            <div className={styles.loginButtons}>
              <img
                slot="start"
                src={facebook}
                className={styles.socialLoginButton}
              />

              <img
                slot="start"
                src={google}
                className={styles.socialLoginButton}
              />
            </div>

            <IonButton
              color="warning"
              expand="block"
              className={styles.createButton}
            >
              <Typography variant="buttonText"> Iniciá con tu email</Typography>
            </IonButton>
            <IonButton
              color="danger"
              expand="block"
              className={styles.createButton}
            >
              <Typography variant="buttonText"> Crear Cuenta</Typography>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
