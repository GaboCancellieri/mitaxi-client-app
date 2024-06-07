import React, { useState } from 'react';
import { IonList, IonItem, IonIcon, IonButton, IonCard, IonCardContent } from '@ionic/react';
import { addOutline, homeOutline, briefcaseOutline, locateOutline, ellipsisHorizontalOutline, createOutline, trashOutline } from 'ionicons/icons';
import { Typography } from '../../../components/common';

interface FrequentPlacesProps {
  handleAddressClick: (address: string) => void;  
}

const FrequentPlaces: React.FC<FrequentPlacesProps> = ({ handleAddressClick }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const frequentPlaces = [
    { id: 'MiCasa', name: 'Mi casa', icon: homeOutline, color: 'warning', address: 'Direccion casa' },
    { id: 'MiTrabajo', name: 'Mi Trabajo', icon: briefcaseOutline, color: 'tertiary', address: 'Direccion trabajo' },
    { id: 'Otros', name: 'Otros', icon: ellipsisHorizontalOutline, color: 'tertiary', address: 'Lugar 3' },
 
  ];

  const handleItemToggle = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <IonList>
      <div style={{ padding: '12px' }}>
        <Typography variant='smallTitle'>Lugares Frecuentes</Typography>
      </div>
      <IonCard>
        {frequentPlaces.map((place) => (
          <React.Fragment key={place.id}>
            <IonItem onClick={() => handleItemToggle(place.id)} button={true} detail={false}>
              <IonIcon icon={place.icon} slot="start" color={place.color}></IonIcon>
              <Typography variant='text'>{place.name}</Typography>
              <IonButton fill="clear" slot="end">
                <IonIcon icon={addOutline}></IonIcon>
              </IonButton>
            </IonItem>
            {expandedItem === place.id && (
              <IonCardContent>
                <IonList>
                  <IonItem onClick={() => handleAddressClick(place.address)}>
                    <Typography variant='text'>{place.address}</Typography>
                    <IonIcon icon={createOutline} slot="end" color="primary"></IonIcon>
                    <IonIcon icon={trashOutline} slot="end" color="danger"></IonIcon>
                  </IonItem>
                </IonList>
              </IonCardContent>
            )}
          </React.Fragment>
        ))}
        <IonItem>
          <IonIcon icon={locateOutline} slot="start" color="success"></IonIcon>
          <Typography variant='text'>Establecer ubicación actual</Typography>
        </IonItem>
      </IonCard>
    </IonList>
  );
};

export default FrequentPlaces;
