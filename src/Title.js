import React from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/system';

const TitleContainer = styled(Grid)({
    width: '100%',
    height: '60vh',
    '@media (max-width:600px':{
        height: '40vh',
    }
})

const BackgroundImage = styled('div')({
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
})

const Image = styled('img')({
    width: '50%',
    height: 'auto',
    objectFit: 'cover',
})


function Title(props) {

    return (
        <TitleContainer container>
            <Grid item xs={12}>
                <BackgroundImage>
                    <Image src='media/RMELogo300-2-ver-7.jpeg' alt='drum-logo' />
                </BackgroundImage>
            </Grid>
        </TitleContainer>
    );
}

export default Title;