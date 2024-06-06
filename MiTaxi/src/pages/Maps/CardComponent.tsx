import React, { useState } from 'react';
import {
  IonCard, IonCardContent, IonButton, IonCheckbox, IonTextarea, IonItem,
} from '@ionic/react';

interface CardProps {
  isOpen: boolean;
  onClose: () => void;
}

const CardComponent: React.FC<CardProps> = ( ) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const handleCheckbox1Change = (e: CustomEvent) => {
    setCheckbox1(e.detail.checked as boolean);
  };

  const handleCheckbox2Change = (e: CustomEvent) => {
    setCheckbox2(e.detail.checked as boolean);
  };
  const handleCheckbox3Change = (e: CustomEvent) => {
    setCheckbox3(e.detail.checked as boolean);
  };

  const handleTextareaChange = (e: CustomEvent) => {
    setTextareaValue(e.detail.value as string);
  };

  const handleNextButtonClick = () => {
    console.log('Equipaje:', checkbox1);
    console.log('Mascota:', checkbox2);
    console.log('Bici:', checkbox3);
    console.log('Info Extra:', textareaValue);
  };

  return (
    <div style={{ position: 'fixed', bottom: 60, left: 0, right: 0, zIndex: 999 }}>
      <IonCard >
        <IonCardContent>
          <h2>Opciones Adicionales</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <IonItem>
              <IonCheckbox checked={checkbox1} onIonChange={handleCheckbox1Change}>¿Llevas equipaje?</IonCheckbox>
            </IonItem>
            <IonItem>
              <IonCheckbox checked={checkbox2} onIonChange={handleCheckbox2Change}>¿Llevas una mascota?</IonCheckbox>
            </IonItem>
            <IonItem>
              <IonCheckbox checked={checkbox3} onIonChange={handleCheckbox3Change}>¿Llevas una bicicleta?</IonCheckbox>
            </IonItem>
            <IonItem>
              <div style={{ marginTop: '15px' }}>
                <span>¿Tienes alguna información extra que debamos saber?</span>
                <IonTextarea value={textareaValue} onIonChange={handleTextareaChange} placeholder="Escribe algo..." />
              </div>
            </IonItem>
            <IonButton expand="block" onClick={handleNextButtonClick}>Siguiente</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CardComponent;
