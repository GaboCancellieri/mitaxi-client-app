import React, { useState } from "react";
import { IonList, IonAlert } from "@ionic/react";
import { Card } from "../../../components/common";
import { useHistory } from "react-router-dom";
import {shortcuts } from './constants'
const AccessShortcuts: React.FC = () => {
  const history = useHistory();
  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
 
  const handleShortcutClick = (address: string) => {
    setSelectedAddress(address);
    setAlertOpen(true);
  };

  const handleAlertConfirm = () => {
    if (selectedAddress && selectedAddress.trim() !== "") {
      history.push(`/mapa?direccion=${encodeURIComponent(selectedAddress)}`);
    } else {
      console.log("Address is empty, not navigating.");
    }
    setAlertOpen(false);
  };

  const handleAlertCancel = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <IonList>
        {shortcuts.map((shortcut) => (
          <Card
            key={shortcut.name}
            title={shortcut.name}
            address={shortcut.address}
            onClick={() => handleShortcutClick(shortcut.address)}
          />
        ))}
      </IonList>
      <IonAlert
        isOpen={alertOpen}
        onDidDismiss={handleAlertCancel}
        header={"Confirmación"}
        message={`¿Quieres ir a la dirección: ${selectedAddress}?`}
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            handler: handleAlertCancel,
          },
          {
            text: "Confirmar",
            handler: handleAlertConfirm,
          },
        ]}
      />
    </div>
  );
};

export default AccessShortcuts;
