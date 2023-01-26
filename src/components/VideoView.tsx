import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'


interface VideoViewProps {
    video: any,
    handleClick?: any
}

export const VideoView: React.FC<VideoViewProps> = ({ video, handleClick }) => {
    return (
        <IonCard>
            <img alt="" src={video.thumbnailUrl} onClick={handleClick} />
            <IonCardHeader>
                <IonCardTitle>{video.name}</IonCardTitle>
                <IonCardSubtitle><a href={`${video.contentUrl}`}>{video.videoId}</a></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                {video.description}
            </IonCardContent>
        </IonCard>
    )
}
