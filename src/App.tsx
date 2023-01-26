import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Main from './pages/Main'
import Videos from './pages/Videos'
import Images from './pages/Images'
import Stars from './pages/Stars'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/images">
            <Images />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route path="/stars">
            <Stars />
          </Route>
          <Route exact path="/">
            <Redirect to="/images" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="images" href="/images">
            <IonLabel>Images</IonLabel>
          </IonTabButton>
          <IonTabButton tab="main" href="/main">
            <IonLabel>Main</IonLabel>
          </IonTabButton>
          <IonTabButton tab="videos" href="/videos">
            <IonLabel>Videos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stars" href="/stars">
            <IonLabel>Stars</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
