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
            <Typography variant="h2" gutterBottom sx={{ fontSize: '48px', color: '#f77a00', paddingBottom: '30px', textAlign: "center" }}>
              About
            </Typography>
            <Typography variant='body1'  style={{color: 'white', fontSize: '22px', fontWeight: '300', marginLeft: '75px', marginRight: '75px', textAlign:'center'}}>
              The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers who are ready to elevate the energy of your next event!<br/><br/>
              We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailor-make our show to best fit your event needs and venue.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{height: 1, backgroundColor: '#CCCCCC'}}/>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '48px', color: '#007FFF', paddingTop: '70px', paddingBottom: '30px' }}>
              Energy
            </Typography>
            <BatteryChargingFullIcon style={{color: '#007FFF', fontSize:'60px', margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph style={{color: 'white', fontSize: '18px', fontWeight: '300', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '30px', textAlign: 'center'}}>
              Ignite your event with our choreographed, high energy drumming that will get your guests jumping out of their chairs!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: 'flex', justifyContent:'flex-end'}}>
            <CardMedia
              component='img'
              src='/media/RME-energy2.jpg'
              alt='drum-energy'
              style={{maxWidth: '100%', height: 'auto', objectFit: 'cover', margin: 0, padding: 0}}
            >
            </CardMedia>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{height: 6, backgroundColor: '#CCCCCC'}}/>
      <Box style={{paddingTop: '10px', backgroundColor: '#141A1F'}}>
        <Grid container spacing={2} style={{backgroundColor: '#141A1F'}}>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: 'flex', justifyContent:'flex-end', paddingTop:'0'}}>
            <CardMedia
              component='img'
              src='/media/RME-custom.jpg'
              alt='bass-drum'
              style={{maxWidth: '100%', height: 'auto', objectFit: 'cover', margin: 0, padding: 0}}
            >
            </CardMedia>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography variant='h2' align='center' gutterBottom style={{color: '#FF3300', fontSize: '48px', paddingTop: '70px', paddingBottom: '30px', paddingRight: '20px', paddingLeft: '20px'}}>
              Custom Performances
            </Typography>
            <SpeakerIcon style={{color: '#FF3300', fontSize: '60px', margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph style={{color: 'white', fontSize: '18px', fontWeight: '300', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '30px', textAlign: 'center'}}>
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
