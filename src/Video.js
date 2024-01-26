import React from 'react';
import { CardMedia, Container } from '@mui/material';
import {styled} from '@mui/system';

const VideoContainer = styled(Container)(({theme}) => ({
   
    backgroundColor: 'black',
    paddingTop: theme.spacing(60),
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(2),
    },
    width: '100%'

}));

const StyledCardMedia = styled(CardMedia)({
    width: '100%',
    // height: '100%',
    margin: 0,
    padding: 0,
    background: 'black',
    objectFit: 'cover'
})

function Video(props) {
    return (
        <VideoContainer>
            <StyledCardMedia 
                component='video'
                src='/media/RMEWebsiteTeaser.mp4'
                autoPlay
                loop
                muted
                // width="100%"
                title="RM-promo-video"
            />
               
        </VideoContainer>
    );
}

export default Video;