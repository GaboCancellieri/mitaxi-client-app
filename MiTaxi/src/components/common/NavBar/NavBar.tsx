import React, { useState, useEffect } from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonFooter } from "@ionic/react";
import { homeOutline, searchOutline, notificationsOutline, personOutline } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import { Typography } from "../index";
const NavBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTab("home");
        break;
      case "/search":
        setActiveTab("search");
        break;
      case "/notifications":
        setActiveTab("notifications");
        break;
      case "/messages":
        setActiveTab("messages");
        break;
      default:
        setActiveTab(" ");
        break;
    }
  }, [location]);

  const navigateTo = (path: string, tab: string) => {
    history.push(path);
    setActiveTab(tab);
  };

  return (
    <IonFooter> 
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" onClick={() => navigateTo("/", "home")} selected={activeTab === "home"}>
          <IonIcon icon={homeOutline} />
       
        </IonTabButton>
        <IonTabButton tab="search" onClick={() => navigateTo("/search", "search")} selected={activeTab === "search"}>
          <IonIcon icon={searchOutline} />
 
        </IonTabButton>
        <IonTabButton tab="notifications" onClick={() => navigateTo("/notifications", "notifications")} selected={activeTab === "notifications"}>
          <IonIcon icon={notificationsOutline} />
 
        </IonTabButton>
        <IonTabButton tab="messages" onClick={() => navigateTo("/messages", "messages")} selected={activeTab === "messages"}>
          <IonIcon icon={personOutline} />
    
        </IonTabButton>
      </IonTabBar>
    </IonFooter>
  );
};

export default NavBar;
