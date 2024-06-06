// App.tsx

import React from "react";
import { IonApp, IonFooter, setupIonicReact } from "@ionic/react";
import { Route } from "react-router-dom";
import { Login, Home, Search, Mapa } from "./pages";
 
import { IonReactRouter } from "@ionic/react-router";
import { NavBar } from "./components/common";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
   
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/mapa">
          <Mapa />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <IonFooter/>
      
        <NavBar/>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
