import React from 'react';
import { CardMedia, Container } from '@mui/material';

function Video(props) {
    return (
        <Container>
            <CardMedia 
                component='video'
                src='/media/RMEWebsiteTeaser.mp4'
                autoPlay
                loop
                muted
                width="100%"
                title="RM-promo-video"
            />
               
        </Container>
    );
}

export default Video;