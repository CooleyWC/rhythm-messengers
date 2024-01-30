import React from 'react';
import Grid from '@mui/material/Grid'
import { Box, CardMedia, Typography } from '@mui/material';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';


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

  const energyBoxStyle = {
    // paddingTop: '100px'
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
      <Box style={energyBoxStyle}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '48px', color: '#007FFF', paddingTop: '100px', paddingBottom: '30px' }}>
              Energy
            </Typography>
            <BatteryChargingFullIcon style={{color: '#007FFF', fontSize:'60px', margin: '0 auto', display: 'block', paddingBottom: '30px'}}/>
            <Typography variant='body1' paragraph style={{color: 'white', fontSize: '18px', fontWeight: '300', paddingLeft: '80px', paddingBottom: '30px'}}>
              The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event!
            </Typography>
          </Grid>
          <Grid item xs={4} style={{display: 'flex', justifyContent:'flex-end'}}>
            <CardMedia
              component='img'
              src='/media/RME-energy-photo.png'
              alt='drum-energy'
              style={{maxWidth: '100%', height: 'auto', objectFit: 'cover'}}
            >
            </CardMedia>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

export default About;


{/* <Container sx={{ bgcolor: 'black', color: 'white' }}>
<Typography variant="h2" align="center" gutterBottom sx={{ fontSize: '48px', color: '#f77a00' }}>
  About
</Typography>
<Grid   >
  <Typography variant="body1" paragraph align='center' >
    The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event!
  </Typography>
  <Typography variant="body1" paragraph align='center' >
    We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailor-make our show to best fit your event needs and venue.
  </Typography>
</Grid>
<Grid >
  <Typography variant="h3" align="center" gutterBottom sx={{ fontSize: '48px', color: '#f77a00' }}>
    Energy
  </Typography>
  <Typography variant="body1" paragraph align='center' >
    Ignite your event with our choreographed, high-energy drumming that will get your guests jumping out of their chairs!
  </Typography>
</Grid>
<Grid >
  <Typography variant="h3" align="center" gutterBottom sx={{ fontSize: '48px', color: '#f77a00' }}>
    'BOOM' Your Audience
  </Typography>
  <Typography variant="body1" paragraph align='center'>
    Your event will take center stage when the Rhythm Messengers make their appearance. Your guests will jump, stomp, and dance your event away.
  </Typography>
  <Typography variant="body1" paragraph align='center'>
    Call today and give your guests - a BOOM!
  </Typography>
 
</Grid> */}