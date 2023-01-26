import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useRef } from "react"
import Webcam from "react-webcam"
import axios from 'axios'


import './Stars.css'



const Stars: React.FC = () => {
    const webcamRef = useRef<Webcam>(null)
    const [shot, setShot] = React.useState<string>()
    const [stars, setStars] = React.useState<any>([])

    useEffect(() => {
        async function load() {
            const options = {
                method: 'GET',
                url: 'https://papi-pornstarsapi.p.rapidapi.com/pornstars/',
                params: { hair: 'blonde' },
                headers: {
                    'X-RapidAPI-Key': '185666417cmshcb6cb46fcb0fe21p1f568djsnf53e92f4ca97',
                    'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
                }
            }

            const res = await axios.request(options)

            setStars(res.data.results)
        }

        load()
    }, [setStars])

    const capture = () => {
        if (webcamRef.current) {
            const screenshot: string = webcamRef.current.getScreenshot() || ''

            setShot(screenshot)
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    {stars.map((star: any) => {
                        console.log(star)
                        return <IonItem>{star.name}</IonItem>
                    })}
                </IonList>
                <Webcam
                    audio={false}
                    height={480}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    videoConstraints={{
                        facingMode: "user",
                    }}
                />
                <button onClick={capture}>Capture</button>
                <img src={shot} alt='shot' />
            </IonContent>
        </IonPage>
    );
};

export default Stars;
