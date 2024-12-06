import React from "react";
import { CardMedia, Box } from "@mui/material";


function Title() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    gap: '1rem'
  }
  
  const drumStyle = {
    marginTop: {xs:0, sm:'4rem', md:'5rem', lg:'6rem', xl: '8rem'},
    maxWidth:{xs:'100%', md:'90%', lg: '50%', xl: '40%'},
    objectFit: 'contain',
    
  }

  const titleStyle = {
    maxWidth:{xs:'90%', md:'80%', lg: '50%', xl: '40%'},
    objectFit: 'contain',
  }

  

  return (
    <Box sx={containerStyle}>
          <CardMedia
            fetchpriority='high'
            component="img"
            src="media/RMELogo300-2-no-background-opt-cr.webp"
            alt="drum-logo"
            sx={drumStyle}
            width={1341}
            height={1145}
          />
          <CardMedia
            component="img"
            width={1200}
            height={337}
            src="media/RMELogo300-2-titleonly-2-opt.webp"
            alt="rhythm-messengers"
            sx={titleStyle}
          />
    </Box>
  );
}

export default Title;


// const gridContainerStyle = {
//   // backgroundColor: "black",
//   // display: 'flex',
//   // flexDirection: 'column',
//   margin: 0,
//   padding: 0,
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh'
// };

// const imageStyle = {
//   // maxWidth: "55%",
//   maxHeight: "55%",
//   // width: "auto",
//   // height: "auto",
//   // marginTop: "5rem",
//   objectFit: "cover",
// };

// const titleStyle = {
//   // maxWidth: "75%",
//   // marginTop: "-55px",
//   // width: "auto",
//   // height: "auto",
// };

// return (
//   <Grid container direction='column' sx={gridContainerStyle}>
//     <Grid item sx={{marginTop: '4rem'}}>
//         <CardMedia
//           fetchpriority='high'
//           component="img"
//           src="media/RMELogo300-2-no-background-opt-cr.webp"
//           // src="media/RMELogo300-2-no-background.webp"
//           alt="drum-logo"
//           style={imageStyle}
//           // width={300}
//           // height={300}
          
//         />
//     </Grid>
//     <Grid item>
//       <div>
//         <h1>hello</h1>
//       </div>
//         {/* <CardMedia
//           component="img"
//           // width={300}
//           // height={300}
//           src="media/RMELogo300-2-titleonly-2-optimized.webp"
//           // src="media/RMELogo300-2-titleonly-2.webp"
//           alt="rhythm-messengers"
//           style={titleStyle}
//         /> */}
//     </Grid>
//   </Grid>
// );
// }