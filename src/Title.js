import React from "react";
import { CardMedia, Box } from "@mui/material";

function Title() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '1rem',
    height: '100vh',
    backgroundColor: 'black',
    gap: '1rem',
  }
  
  const logoStyle = {
    marginTop: {xs:'2.5rem', sm:'3rem', md:'4rem', lg:'5rem', xl: '6rem'},
    maxWidth:{xs:'90%', sm:'80%', md:'70%', lg: '70%', xl: '70%'},
    maxHeight:{xs:'90%', sm:'80%', md:'70%', lg: '70%', xl: '70%'},
    objectFit: 'contain',
  }

  return (
        <Box sx={containerStyle}>
          <CardMedia
            fetchpriority='high'
            component="img"
            src="media/RMELogo300-combined-1280.webp"
            alt="drum-logo"
            sx={logoStyle}
            width={1341}
            height={1145}
          />
        </Box>
  );
}

export default Title;
