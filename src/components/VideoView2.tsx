import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'


interface VideoView2Props {
    video: any,
    handleClick?: any
}

export const VideoView2: React.FC<VideoView2Props> = ({ video, handleClick }) => {
    return (
        <IonCard>
            <img alt="" src={video.thumbnails[video.thumbnails.length-1].url} onClick={handleClick} />
            <IonCardHeader>
                <IonCardTitle>{video.title}</IonCardTitle>
                <IonCardSubtitle><a href={`https://youtube.com/watch?v=${video.video_id}`}>{video.video_id}</a></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                {video.description}
            </IonCardContent>
        </IonCard>
    )
}
