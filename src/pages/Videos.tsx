import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react'

import { VideoView } from '../components/VideoView'

import { useVideos } from '../lists/Videos'

import './Videos.css'

const Videos: React.FC = () => {
  const Videos = useVideos()
  const [items, setItems] = useState<any[]>(Videos.items)

  Videos.listen(() => {
    const v: Array<any> = Videos.items

    setItems(v.map(item => item))
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 22</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {items.map((video) => {
            console.log(video)
            return <IonItem><VideoView video={video} /></IonItem>
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
