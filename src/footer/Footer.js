import React from 'react';
import { FaInstagram } from "react-icons/fa";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


import Card from './Card'
import { Typography } from '@mui/material';
function Footer(props) {
    return (
          <Box style={{backgroundColor:'#f5f5f5' }}>
            <Grid container spacing={2} sx={{justifyContent:'space-around'}}>
              <Grid item xs={12} sm={6} md={3} textAlign='center'>
                <Card
                  name="THOMAS BENKO"
                  title="Band Leader"
                  email=""
                  phoneNumber=" 1-630-415-9521" />
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign='center'>
                <Card
                  name="LIVE ART INTERNATIONAL"
                  title="Agent - Dayna Malow"
                  email="info@liveartinternational.com"
                  phoneNumber="1-800-985-9330" />
              </Grid>
              <Grid item xs={12} sm={6} md={3} textAlign='center'>
                <Card
                  name="SF Agent"
                  title="Pinnacle - Nathan Kelly"
                  email=""
                  phoneNumber="1-800-769-3322" />
              </Grid>
            </Grid>
            <Typography style={{fontSize: '12px', textAlign: 'center', marginBottom:'0', marginTop: '20px'}}>© 2024 Rhythm Messengers.</Typography>
          </Box>
    );
}

export default Footer;