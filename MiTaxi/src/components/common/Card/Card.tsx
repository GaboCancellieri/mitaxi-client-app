import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonItem, IonImg } from '@ionic/react';
import { Typography } from '../../../components/common';

interface CardProps {
  title: string;
  address?: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, address, description, imageUrl, children, onClick }) => {
  return (
    <IonCard onClick={onClick}>
      {imageUrl && (
        <IonImg 
          src={imageUrl} 
          alt={title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Establecer ancho y alto fijo
        />
      )}
      <IonCardHeader>
        <IonItem>
          <Typography variant='smallTitle'>{title}</Typography>
        </IonItem>
        {description && (
          <IonItem>
            <Typography variant='text'>{description}</Typography>
          </IonItem>
        )}
      </IonCardHeader>
      <IonCardContent>
        {address && (
          <IonItem>
            <Typography variant='text'>{address}</Typography>
          </IonItem>
        )}
        {children}
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
