import React from 'react';
import Grid from '@mui/material/Grid'
import { Box, CardContent, CardMedia, Typography, Container } from '@mui/material';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SpeakerIcon from '@mui/icons-material/Speaker';
import BusinessIcon from '@mui/icons-material/Business';
import FestivalIcon from '@mui/icons-material/Festival';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import Divider from '@mui/material/Divider';

const About=() =>{

  const boxStyle = {
    backgroundColor: '#141A1F'
  }

  const aboutTitleStyle = {
    marginTop:'40px',
    marginBottom: '40px',
    paddingTop: '20px',
    paddingBottom: '40px',
    backgroundColor: '#141A1F',
  }

  return (
    <div style={{ backgroundColor: '#141A1F' }}>
      <Box style={boxStyle}>
      <Divider sx={{height: 1, backgroundColor: '#CCCCCC'}}/>
        <Grid container>
          <Grid item xs={12} style={aboutTitleStyle}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: {xs: '3.5rem', xl: '4.5rem'}, color: '#f77a00', paddingBottom: '30px', textAlign: "center" }}>
              About
            </Typography>
            <Typography variant='body1' sx={{color: 'white', fontSize: {xs:'1.3rem', sm: '1.4rem', lg: '1.5rem', xl: '1.8rem'}, fontWeight: 'light', lineHeight: {xs: '1.4', sm: '1.3', md: '1.4', lg: '1.5'}, p: {xs: '0 2.7rem 2.5rem 2.7rem', sm: '1.5rem 5rem', md: '2rem 5.2rem 4rem 5.2rem', lg: '2rem 16rem 3rem 16rem', xl: '2.5rem 20rem 2.5rem 20rem'}, textAlign: 'left'}}>
              The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers who are ready to elevate the energy of your next event!<br/><br/>
              We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailor-make our show to best fit your event needs and venue.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{height:1, backgroundColor: '#CCCCCC'}}/>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: {xs: '3rem', xl: '4rem'}, color: '#007FFF', paddingTop: '70px', paddingBottom: '30px' }}>
              Energy
            </Typography>
            <BatteryChargingFullIcon sx={{color: '#007FFF', fontSize: {xs: '4rem', sm: '4.5rem', md: '5rem', xl: '5.5rem'}, margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph sx={{color: 'white', fontSize: {xs:'1.2rem', sm: '1.3rem', lg: '1.4rem', xl: '1.6rem'}, fontWeight: 'light', lineHeight: {xs: '1.4', sm: '1.3', md: '1.4'}, p: {xs: '0 2.7rem 2.5rem 2.7rem', sm: '1.5rem 5rem 2rem 5rem', md: '2rem 5.2rem 4rem 5.2rem', lg: '2.5rem 7rem 5rem 7rem', xl: '2.7rem 12rem 5rem 12rem'}, textAlign: 'center'}}>
              Ignite your event with our choreographed, high energy drumming that will get your guests jumping out of their chairs!
            </Typography>
           
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: 'flex', justifyContent:'flex-end'}}>
            <CardMedia
              component='img'
              src='/media/RME-energy2.jpg'
              alt='drumming with snares and cymbals'
              style={{maxWidth: '100%', height: 'auto', objectFit: 'cover', margin: 0, padding: 0}}
            >
            </CardMedia>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{backgroundColor: '#CCCCCC', height: 1}}/>
      <Box className='box' sx={{backgroundColor: '#141A1F', padding: 0, margin:0}}>
        <Grid className='grid' container spacing={2} style={{backgroundColor: '#141A1F', margin:0}}>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{order: {xs:2,md:1}, display: 'flex', justifyContent:'flex-end', m:0, padding:'0 !important'}}>
            <CardMedia
              component='img'
              src='/media/RME-custom.jpg'
              alt='drumming photo with snares and tenors'
              sx={{maxWidth: '100%', objectFit: 'cover', margin: 0, p: 0}}
            >
            </CardMedia>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} sx={{order: {xs:1,md:2}}}>
            <Typography variant='h2' align='center' gutterBottom sx={{ fontSize: {xs: '3rem', xl: '4rem'}, color: '#FF3300', paddingTop: '70px', paddingBottom: '30px' }}>
              Custom Performances
            </Typography>
            <SpeakerIcon sx={{color: '#FF3300', fontSize: {xs: '4rem', sm: '4.5rem', md: '5rem', xl: '5.5rem'}, margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph sx={{color: 'white', fontSize: {xs:'1.2rem', sm: '1.3rem', lg: '1.4rem', xl: '1.6rem'}, fontWeight: 'light', lineHeight: {xs: '1.4', sm: '1.3', md: '1.4'}, p: {xs: '0 2.7rem 2.5rem 2.7rem', sm: '1.5rem 5rem 2rem 5rem', md: '2rem 5.2rem 4rem 5.2rem', lg: '2.5rem 7rem 5rem 7rem', xl: '2.7rem 12rem 5rem 12rem'}, textAlign: 'center'}}>
              Your event will take center stage when the Rhythm Messengers make their appearance. Your guests will jump, stomp and dance your event away!
            </Typography>
          </Grid>
        </Grid>
      </Box>
     
        <Grid container style={{backgroundColor: '#f5f5f5', paddingTop: '50px'}}>
          <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center', paddingTop: '40px'}}>
            <BusinessIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '30px'}}>
              Trade Shows
            </Typography>
            <Typography variant='body1' style={{fontSize: '18px', fontWeight: '300', padding: '30px'}}>
              Stop traffic at your booth with an attraction they won't forget.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center', paddingTop: '40px'}}>
            <FestivalIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '30px'}}>
              Festivals
            </Typography>
            <Typography variant='body1' style={{fontSize: '18px', fontWeight: '300', padding: '30px'}}>
              Main stage or impromptu, We light the fuse to festival fun.
            </Typography>
          </Grid>
   
          <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center', paddingTop: '40px'}}>
            <WorkIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '30px'}}>
              Corporate Events
            </Typography>
            <Typography variant='body1' style={{fontSize: '18px', fontWeight: '300', padding: '30px'}}>
              Give your company an event to remember with our rhythmic beats.
            </Typography>
          </Grid>
  
          <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center', paddingTop: '40px'}}>
            <GroupsIcon style={{fontSize: '50px'}}/>
            <Typography style={{fontSize: '30px'}}>
              Sessions
            </Typography>
            <Typography variant='body1' style={{fontSize: '18px', fontWeight: '300', padding: '30px'}}>
              Kick off the meeting with an electrifying and high energy atmosphere.
            </Typography>
          </Grid>
        </Grid>
   
      <Container>
        <Grid container spacing={1} style={{display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px'}}>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/elmilagro.png'
               alt='milagro'
               style={{padding: '0', margin: '0', maxHeight: '75px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/jra.png'
               alt='jra'
               style={{padding: '0', margin: '0', maxHeight: '75px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/century21.png'
               alt='c21'
               style={{padding: '0', margin: '0', maxHeight: '75px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/decision1.png'
               alt='decision1'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/2friends.png'
               alt='2friends'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/lolla.png'
               alt='lolla'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/att.png'
               alt='att'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/wintrust.png'
               alt='wintrust'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/hand2mind.png'
               alt='hand2mind'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/joeslive.png'
               alt='joeslive'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/flyover.png'
               alt='flyover'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/cabinet.png'
               alt='cabinet'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/mri.png'
               alt='mri'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/lifetime.png'
               alt='lifetime'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/museum.png'
               alt='museum'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/nurse.png'
               alt='nurse'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/marathon.png'
               alt='marathon'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
          <Grid item>
            <CardContent
               component='img'
               src='/media/client-logos/wbc.png'
               alt='wbc'
               style={{padding: '0', margin: '0', maxHeight: '60px', maxWidth: '100%'}}
            >
            </CardContent>
          </Grid>
        </Grid>
        <Divider sx={{height: 1, backgroundColor: '#CCCCCC'}}/>
      </Container>
    </div>
  );
}

export default About;
