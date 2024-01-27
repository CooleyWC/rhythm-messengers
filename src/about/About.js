import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Card from './Card'




function About(props) {

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container id='about' sx={{ bgcolor: 'black', color: 'white' }}>
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
          <Box textAlign='center' >
            <Button variant="contained" sx={{ backgroundColor: '#f77a00', ':hover': { backgroundColor: '#f77a00' } }} href='#' >
              Book Now
            </Button>
          </Box>
        </Grid>


        {/* <div>
                <Card 
                title='TRADE SHOWS' 
                description="Stop traffic at your booth with an attraction they won't forget."/>
                <Card 
                title='FESTIVALS' 
                description="Main stage or impromptu, We light the fuse to festival fun."/>
                <Card 
                title='SESSIONS' 
                description="Kick off the meeting with an electrifying and high energy atmosphere."/>
              </div> */}
      </Container>
    </div>
  );
}

export default About;