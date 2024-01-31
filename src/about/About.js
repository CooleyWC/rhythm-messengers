import React from 'react';
import Grid from '@mui/material/Grid'
import { Box, CardMedia, Typography } from '@mui/material';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SpeakerIcon from '@mui/icons-material/Speaker';
import BusinessIcon from '@mui/icons-material/Business';
import FestivalIcon from '@mui/icons-material/Festival';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

const About=(props) =>{

  const boxStyle = {
    backgroundColor: 'white'
  }

  const aboutTitleStyle = {
    marginTop:'40px',
    marginBottom: '40px',
    paddingTop: '20px',
    paddingBottom: '40px',
    backgroundColor: 'black',
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Box style={boxStyle}>
        <Grid container>
          <Grid item xs={12} style={aboutTitleStyle}>
            <Typography variant="h2" gutterBottom sx={{ fontSize: '48px', color: '#f77a00', paddingBottom: '30px', textAlign: "center" }}>
              About
            </Typography>
            <Typography variant='body1'  style={{color: 'white', fontSize: '22px', fontWeight: '300', marginLeft: '100px', marginRight: '100px'}}>
              The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event!<br/><br/>
              We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailor-make our show to best fit your event needs and venue.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '48px', color: '#007FFF', paddingTop: '100px', paddingBottom: '30px' }}>
              Energy
            </Typography>
            <BatteryChargingFullIcon style={{color: '#007FFF', fontSize:'60px', margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph style={{color: 'white', fontSize: '18px', fontWeight: '300', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '30px'}}>
              The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event!
            </Typography>
          </Grid>
          <Grid item xs={4} style={{display: 'flex', justifyContent:'flex-end'}}>
            <CardMedia
              component='img'
              src='/media/RME-energy-photo.png'
              alt='drum-energy'
              style={{maxWidth: '100%', height: 'auto', objectFit: 'cover', maxHeight: '680px'}}
            >
            </CardMedia>
          </Grid>
        </Grid>
      </Box>
      <Box style={{paddingTop: '60px', backgroundColor: 'white'}}>
        <Grid container spacing={2} style={{backgroundColor: 'black'}}>
          <Grid item xs={4} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <CardMedia
              component='img'
              src='/media/RME-bassdrum.png'
              alt='bass-drum'
              style={{width:'100%', height: '100%', objectFit: 'cover', maxHeight: '680px'}}
            >
            </CardMedia>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h2' align='center' gutterBottom style={{color: '#FF3300', paddingTop: '100px', paddingBottom: '30px'}}>
              BOOM
            </Typography>
            <SpeakerIcon style={{color: '#FF3300', fontSize: '60px', margin: '0 auto', display: 'block', paddingBottom: '50px'}}/>
            <Typography variant='body1' paragraph style={{color: 'white', fontSize: '18px', fontWeight: '300', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '30px'}}>
              Your event will take center stage when the Rhythm Messengers make their appearance. Your guests will jump, stomp and dance your event away.<br/><br/>
              Call today and give your guests - a BOOM!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container style={{backgroundColor: '#f5f5f5', height: '400px', paddingTop: '50px'}}>
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
      </Box>
    </div>
  );
}

export default About;
