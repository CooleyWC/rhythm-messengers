import React from 'react';
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
import Card from './Card'
import { Typography } from '@mui/material';

function Footer() {
    return (
          <Box sx={{backgroundColor:'#f5f5f5', paddingTop: '20px' }}>
            <Box sx={{
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center', gap: {xs:'2rem', sm:'4rem'},
              // alignItems: {xs:'center', sm:'flex-start'},
              textAlign: 'left',
              fontSize: {xs:'0.5rem', sm:'1rem'},
          
            
              }}>
                <Card
                  name="THOMAS BENKO"
                  title="Band Leader"
                  email="tabdrums@gmail.com"
                  phoneNumber=""
                  />
                <Divider orientation='vertical' sx={{border:'0.8px solid', height: '75px'}}/>
                <Card
                  name="LIVE ART INTERNATIONAL"
                  title="Agent - Dayna Malow"
                  email="dayna@liveartinternational.com"
                  phoneNumber="1-800-985-9330" />
            </Box>
            <Typography style={{fontSize: '12px', textAlign: 'center', marginBottom:'0', marginTop: '20px'}}>© 2024 Rhythm Messengers. | Designed by BlueWave Codeworks.</Typography>
          </Box>
    );
}

export default Footer;


// <Grid container spacing={2} sx={{justifyContent: 'center'}}>
//               <Grid item xs={12} sm={6} md={3} textAlign='left' sx={{maxWidth:{xs:'200px', sm:'none'}}}>
//                 <Card
//                   name="THOMAS BENKO"
//                   title="Band Leader"
//                   email="tabdrums@gmail.com"
//                   phoneNumber="" />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3} textAlign='left' sx={{maxWidth:{xs:'200px', sm:'none'}}}>
//                 <Card
//                   name="LIVE ART INTERNATIONAL"
//                   title="Agent - Dayna Malow"
//                   email="dayna@liveartinternational.com"
//                   phoneNumber="1-800-985-9330" />
//               </Grid>
//             </Grid>
//             <Typography style={{fontSize: '12px', textAlign: 'center', marginBottom:'0', marginTop: '20px'}}>© 2024 Rhythm Messengers. | Designed by BlueWave Codeworks.</Typography>