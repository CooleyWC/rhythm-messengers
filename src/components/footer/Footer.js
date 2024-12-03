import React from 'react';
import Box from '@mui/material/Box'
import Card from './Card'
import { Typography } from '@mui/material';

function Footer() {
    return (
      <>
        <Box sx={{display:'flex', 
          flexDirection:{xs:'column', sm:'row'}, 
          justifyContent: 'center',
          alignItems: {xs:'center', sm: 'start'},
          backgroundColor:'#f5f5f5',
          color: '#4a4a4a'
        }}>
          <Card
            name="THOMAS BENKO"
            title="Band Leader"
            email="tabdrums@gmail.com"
            phoneNumber=""
          >
          </Card>
          <Card
            name="LIVE ART INTERNATIONAL"
            title="Agent - Dayna Malow"
            email="dayna@liveartinternational.com"
            phoneNumber="1-800-985-9330"
          >
          </Card>   
        </Box>
        <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', backgroundColor: '#e0e0e0'}}>
            <Typography sx={{fontSize: '0.75rem', py:1.5, px:{xs:2}, textAlign: 'center'}}>
                © 2024 Rhythm Messengers. Designed by BlueWave Codeworks.
            </Typography>
        </Box>
      </>   
    );
}

export default Footer;
