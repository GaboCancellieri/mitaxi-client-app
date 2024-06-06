import React, { useEffect, useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import CardComponent from './CardComponent';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
const containerStyle = {
  width: '100%',
  height: '45vh',

};

const Mapa: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [directions, setDirections] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          setError('Error obteniendo la ubicación actual');
        }
      );
    }

    const queryParams = new URLSearchParams(window.location.search);
    const direccion = queryParams.get('direccion') || '';
    setDestinationAddress(direccion);
  }, []);

  const handleDirectionsLoad = (directionsResult: any, status: any) => {
    if (status === 'OK') {
      setDirections(directionsResult);
    } else {
      setError('No se encontraron direcciones para la ubicación proporcionada.');
    }
  };

  return (
    
    <div>
           <IonHeader>
      <IonToolbar color="primary">
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      {error ? (
        <div>{error}</div>
      ) : (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={13}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          gestureHandling: 'greedy',
 
        }}
      >
          {currentLocation && destinationAddress && !directions && (
            <DirectionsService
              options={{
                destination: destinationAddress,
                origin: currentLocation,
                travelMode: (google.maps.TravelMode as any).DRIVING,
              }}
              callback={(result, status) => handleDirectionsLoad(result, status)}
            />
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      )}
      <CardComponent isOpen={true} onClose={function (): void {
              throw new Error('Function not implemented.');
          } }></CardComponent>
    </div>
  );
};

export default Mapa;
