import React from 'react';
import { Grid, CardMedia } from '@mui/material';


function Video(props) {

    const gridContainerStyle = {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <Grid container style={gridContainerStyle}>

                <CardMedia 
                    component='video'
                    src='/media/RMEWebsiteTeaser.mp4'
                    autoPlay
                    loop
                    muted
                    title="RM-promo-video"
                >
                </CardMedia>

        </Grid>
    );
}

export default Video;