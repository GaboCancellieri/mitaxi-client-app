import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonButton, IonIcon, IonCard, IonCardHeader, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import { addOutline, homeOutline, briefcaseOutline, locateOutline, searchOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

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
                            <IonLabel>{currentLocation}</IonLabel>
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

                <IonList>
                    <IonItem>
                        <IonIcon icon={homeOutline} slot="start" color="warning"></IonIcon>
                        <IonLabel>Mi casa</IonLabel>
                        <IonButton fill="clear" slot="end">
                            <IonIcon icon={addOutline}></IonIcon>
                        </IonButton>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={briefcaseOutline} slot="start" color="tertiary"></IonIcon>
                        <IonLabel>Agregar trabajo</IonLabel>
                        <IonButton fill="clear" slot="end">
                            <IonIcon icon={addOutline}></IonIcon>
                        </IonButton>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={locateOutline} slot="start" color="success"></IonIcon>
                        <IonLabel>Establecer ubicación actual</IonLabel>
                    </IonItem>
           
               
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Search;
