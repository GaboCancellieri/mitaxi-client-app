import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader style={{ position: 'fixed', top: 0, width: '100%', zIndex: 99}}>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
