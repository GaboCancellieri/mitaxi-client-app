import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonCard, IonCardHeader, IonItem, IonInput, IonList } from '@ionic/react';
import { addOutline, locateOutline, searchOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { Typography } from '../../components/common';
import FrequentPlaces from './components';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
              .then(response => response.json())
              .then(data => {
                const { address } = data;
                setCurrentLocation(`${address.road}, ${address.house_number}, ${address.state}`);
              })
              .catch(error => console.error('Error fetching location data:', error));
          },
          (error) => {
            console.error('Error getting current location:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log('Navigating to /mapa with direccion:', searchTerm);
      history.push(`/mapa?direccion=${encodeURIComponent(searchTerm)}`);
    } else {
      console.log('Search term is empty, not navigating.');
    }
  };

  const handleInputChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setSearchTerm(value);
    console.log('Current input value:', value);
  };

  const handleAddressClick = (address: string) => {
    setSearchTerm(address); // Actualizar el término de búsqueda con la dirección seleccionada
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>UserName o Photo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonItem>
              <IonIcon icon={locateOutline} slot="start"></IonIcon>
              <Typography variant='text'>{currentLocation}</Typography>
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="¿A dónde vamos?"
                value={searchTerm}
                onIonChange={handleInputChange}
              />
              <IonButton slot="end" onClick={handleSearch}>
                <IonIcon icon={searchOutline}></IonIcon>
              </IonButton>
            </IonItem>
          </IonCardHeader>
        </IonCard>

        <FrequentPlaces handleAddressClick={handleAddressClick} />
      </IonContent>
    </IonPage>
  );
};

export default Search;
