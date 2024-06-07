import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Card from '../../../components/common/Card'; 
 import {features} from './constants'

const Features: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        {features.map((feature, index) => (
          <IonCol key={index}>
            <Card
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
             
            />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default Features;
