import React from 'react';
import {Grid, CardMedia} from '@mui/material';
import Stack from '@mui/material/Stack';



function Title(props) {

    const gridContainerStyle = {
        backgroundColor: 'black',
        margin: 0,
        padding: 0,
    }

    const imageStyle = {
        maxWidth: '55%',
        maxHeight: '55%',
        marginTop: '25px',
        objectFit: 'cover'
    }

    const titleStyle = {
        maxWidth: '75%',
        marginTop: '-55px',
    }

    return (
        <Grid 
            container 
            style={gridContainerStyle}
        >
            <Grid item>
                <Stack alignItems='center'>
                    <CardMedia
                        component='img'
                        src='media/RMELogo300-2-no-background.png' 
                        alt='drum-logo' 
                        style={imageStyle}
                    />
                    <CardMedia
                        component='img'
                        src='media/RMELogo300-2-titleonly-2.png'
                        alt='rhythm-messengers'
                        style={titleStyle}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Title;