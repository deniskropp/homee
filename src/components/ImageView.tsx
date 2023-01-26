import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'


interface ImageViewProps {
    image: any,
    handleClick?: any
}

export const ImageView: React.FC<ImageViewProps> = ({ image, handleClick }) => {
    return (
        <IonCard>
            <img alt="" src={image.thumbnailUrl} onClick={handleClick} />
            <IonCardHeader>
                <IonCardTitle>{image.name}</IonCardTitle>
                <IonCardSubtitle><a href={image.contentUrl}>{image.contentUrl}</a></IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                {image.description}
            </IonCardContent>
        </IonCard>
    )
}
