import * as IR from '@ionic/react'
import { IonContent, IonButton, IonGrid, IonHeader, IonLabel, IonRow, IonCol, IonItem, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import axios from 'axios'
import { useState } from 'react'

import { ImageView } from '../components/ImageView'

import { useImages } from '../lists/Images'

import './Images.css'


async function queryBing({ query, count = 100, offset = 0 }: { query: string, count?: number, offset?: number }) {
    const options = {
        method: 'GET',
        url: 'https://bing-image-search1.p.rapidapi.com/images/search',
        params: { q: query, count, offset, safeSearch: 'Off' },
        headers: {
            'X-RapidAPI-Key': 'acee344339mshfa967de0b6a29d8p148e75jsn9a5790c07991',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    }

    const res = await axios.request(options)

    console.log(res.data)

    return res.data.value
}

const Images: React.FC = () => {
    const [images, setImages] = useState<any[]>([])
    const Images = useImages()
    const [index, setIndex] = useState(0)

    async function load(query: string) {
        try {
            const v = await queryBing({ query })

            setImages(v)
            setIndex(0)
        }
        catch (err) {
            console.error(err)
        }
    }

    async function handleClick(image: any) {
        Images.push(image)
    }

    async function searchBarChange(event: IR.SearchbarCustomEvent) {
        if (event.detail.value !== undefined) {
            // start a new search
            load(event.detail.value)
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Images</IonTitle>
                    <IonSearchbar onIonChange={searchBarChange}></IonSearchbar>
                    <IonButton disabled={index === 0} onClick={() => setIndex(index - 1)}>Prev</IonButton>
                    <IonButton disabled={index >= images.length - 1} onClick={() => setIndex(index + 1)}>Next</IonButton>
                    <IonLabel>{index + 1}/{images.length}</IonLabel>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Images</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {images.length > index && <ImageView image={images[index]} />}
            </IonContent>
        </IonPage>
    )
}

export default Images
