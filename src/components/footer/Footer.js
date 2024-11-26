import React from 'react';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from './Card'
import { Typography } from '@mui/material';

function Footer() {
    return (
          <Box sx={{backgroundColor:'#f5f5f5'}}>
            <Grid container spacing={2} 
            sx={{justifyContent: 'center'
            }}>
              <Grid item xs={12} sm={6} md={3} textAlign='left' sx={{maxWidth:{xs:'200px', sm:'none'}}}>
                <Card
                  name="THOMAS BENKO"
                  title="Band Leader"
                  email="tabdrums@gmail.com"
                  phoneNumber="" 
                  />
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign='left' sx={{maxWidth:{xs:'200px', sm:'none'}}}>
                <Card
                  name="LIVE ART INTERNATIONAL"
                  title="Agent - Dayna Malow"
                  email="dayna@liveartinternational.com"
                  phoneNumber="1-800-985-9330" 
                  />
              </Grid>
            </Grid>
            <Typography style={{fontSize: '0.75rem', textAlign: 'center', marginBottom:'0', marginTop: '30px'}}>© 2024 Rhythm Messengers. Designed by BlueWave Codeworks.</Typography>
          </Box>
    );
}

export default Footer;

