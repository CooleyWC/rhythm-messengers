import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material';
import Card from './Card'

function About(props) {
  return (
    <Container id='about'>
      <Typography variant="h1" align="center" gutterBottom>
        About
      </Typography>
      <Grid container justify="center">

        <Grid xs={12} md={12}>
          <Typography variant="body1" paragraph align='center'>
            The Rhythm Messengers are an adaptable crew of highly animated drummers and entertainers to elevate the energy of your next event!
          </Typography>
          <Typography variant="body1" paragraph align='center'>
            We are a collection of performers drawing from Chicago’s best drumming productions. We’ll tailor-make our show to best fit your event needs and venue.
          </Typography>
        </Grid>
        <Grid xs={12} md={12}>
          <Typography variant="h2" align="center" gutterBottom>
            ENERGY
          </Typography>
          <Typography variant="body1" paragraph align='center'>
            Ignite your event with our choreographed, high-energy drumming that will get your guests jumping out of their chairs!
          </Typography>
        </Grid>
        <Grid xs={12} md={12}>
          <Typography variant="h2" align="center" gutterBottom>
            'BOOM' Your Audience
          </Typography>
          <Typography variant="body1" paragraph align='center'>
            Your event will take center stage when the Rhythm Messengers make their appearance. Your guests will jump, stomp, and dance your event away.
          </Typography>
          <Typography variant="body1" paragraph align='center'>
            Call today and give your guests - a BOOM!
          </Typography>
          <Box textAlign='center'>
            <Button variant="contained" sx={{ backgroundColor: '#FFC080', ':hover': { bgcolor: '#f77a00' } }} href='#' >
              Book Now
            </Button>
          </Box>
        </Grid>
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
  );
}

export default About;