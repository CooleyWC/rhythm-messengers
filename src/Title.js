import React from 'react';
import {Grid, CardMedia, Typography} from '@mui/material';


function Title(props) {

    const titleText = 'Rhythm Messengers'

    const gridContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden',
        margin: 0,
        padding: 0,

    }

    const imageStyle = {
        maxWidth: '75%',
        maxHeight: '75%',
        marginTop: '20px',
        objectFit: 'contain'
    }

    const typeStyle = {
        color: 'white',
        textAlign: 'center',
        '@media (max-width:600px)': {
            textAlign: 'center',
        }

    }

    return (
        <Grid container style={gridContainerStyle}>
            <CardMedia
                component='img'
                src='media/RMELogo300-2-no-background.png' 
                alt='drum-logo' 
                style={imageStyle}
                >
            </CardMedia>
            <Typography variant='h3' style={typeStyle}>
                {titleText}
            </Typography> 
        </Grid>
    );
}

export default Title;