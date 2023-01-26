import * as IR from '@ionic/react'
import { IonContent, IonGrid, IonHeader, IonRow, IonCol, IonItem, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { VideoView2 } from '../components/VideoView2'

import { useVideos } from '../lists/Videos'

import './Main.css'

const apiKey = "AIzaSyAuEG3xD3286KNBCaRsySBDTaBB6TySNZQ"


async function queryBing({ query, count = 100, offset = 0 }: { query: string, count?: number, offset?: number }) {
    const options = {
        method: 'GET',
        url: 'https://bing-video-search1.p.rapidapi.com/videos/search',
        params: { q: query, count, offset, safeSearch: 'Off' },
        headers: {
            'X-RapidAPI-Key': '185666417cmshcb6cb46fcb0fe21p1f568djsnf53e92f4ca97',
            'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
        }
    }

    const res = await axios.request(options)

    return res.data.value
}

async function queryYoutube({ query }: { query: string }) {
    const res = await axios.request({
        url: `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&q=${query}&part=snippet&maxResults=50&safeSearch=none`
    })

    return res.data.items
}

async function queryYoutubeV2({ query }: { query: string }) {
    const options = {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/search/',
        params: { query, xlang: 'en', order_by: 'this_month', xcountry: 'us' },
        headers: {
            'X-RapidAPI-Key': '5814dd808fmsh325af6e3af961f7p18ed22jsn60b3de6b5df9',
            'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
    }

    const res = await axios.request(options)

    return res.data.videos
}

const Main: React.FC = () => {
    const [videos, setVideos] = useState<any[]>([])
    const Videos = useVideos()

    async function load(query: string) {
        try {
            const v = await queryYoutubeV2({ query })

            setVideos(v)
        }
        catch (err) {
            console.error(err)
        }
    }

    async function handleClick(video: any) {
        Videos.push(video)
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
                    <IonTitle>Main</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Main</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonSearchbar onIonChange={searchBarChange}></IonSearchbar>
                <IonGrid>
                    <IonRow>
                        {videos.map((item, index) => (
                            <IonCol>
                                <IonItem key={index}>
                                    <VideoView2 video={item} handleClick={handleClick} />
                                </IonItem>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Main
