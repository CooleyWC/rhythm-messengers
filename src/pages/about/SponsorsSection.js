import React from "react";
import { Divider, Box, Typography } from "@mui/material";
import sponsorsData from "./sponsersData";
import {keyframes} from '@mui/system'



const slide = keyframes `
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-100%)
  }
`
const cardStyle = {
  height: '100px', 
  width: '200px',
  backgroundColor: 'gray',
  borderRadius: '6px',
  display: 'inline-block',
  margin: '0 10px',
}

const imgStyle = {
  height: '100px', 
  width: '200px',
}

const SponsorsSection = () => {

  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '46px'}}>
      <Typography variant="h2" gutterBottom sx={{fontSize: "48px", color: "#f77a00"}}>Clients</Typography>
    </Box>

    <Box sx={{
          height: '100px',
          paddingBottom: '46px', 
          backgroundColor: '#141A1F',
          overflow: 'hidden', 
          width: '90%',
          marginInline: 'auto',
          position: 'relative',
          marginTop: '2rem',
          whiteSpace: 'nowrap',
          '&:hover > .innerContainer': {
            animationPlayState: 'paused'
          },
          '&:before': {
            position: 'absolute',
            width: '150px',
            height: '100%',
            top: 0,
            left: 0,
            background: 'linear-gradient(to left, rgba(255,255,255, 0), #141A1F)',
            zIndex: '2',
            content: '""'
          },
          '&:after': {
            position: 'absolute',
            width: '150px',
            height: '100%',
            top: 0,
            right: 0,
            background: 'linear-gradient(to right, rgba(255,255,255, 0), #141A1F)',
            zIndex: '2',
            content: '""'
          }

          }}>
            <Box 
              className="innerContainer"
              sx={{
              display: 'inline-block', 
              animation: `50s infinite linear ${slide}`
              }}>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/elmilagro.webp'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/century21.webp'
                alt="century21"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/decision1.webp'
                alt='desicion One'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/2friends.webp'
                alt='two friends'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/lolla.webp'
                alt='lollapalooza'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/att.webp'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/wintrust.webp'
                alt="wintrust chicago's bank"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/hand2mind.webp'
                alt="hand 2 mind"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/joeslive.webp'
                alt="joe's live"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/flyover.webp'
                alt="flyover"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/cabinet.webp'
                alt="cabinet of curiosity"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/mri.webp'
                alt="mri ascend north america 2023"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/lifetime.webp'
                alt="lifetime fitness"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/museum.webp'
                alt="museum of science + industry chicago"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/nurse.webp'
                alt="american association of critical-care nurses"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/marathon.webp'
                alt="life time chicago half marathon + 5k presented by HOKA"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/wbc.webp'
                alt="world business chicago"
              />
            </Box>
            </Box>
            <Box 
              className="innerContainer"
              sx={{
              display: 'inline-block', 
              animation: `50s infinite linear ${slide}`
              }}>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/elmilagro.webp'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/century21.webp'
                alt="century21"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/decision1.webp'
                alt='desicion One'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/2friends.webp'
                alt='two friends'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/lolla.webp'
                alt='lollapalooza'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/att.webp'
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/wintrust.webp'
                alt="wintrust chicago's bank"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/hand2mind.webp'
                alt="hand 2 mind"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/joeslive.webp'
                alt="joe's live"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/flyover.webp'
                alt="flyover"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/cabinet.webp'
                alt="cabinet of curiosity"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/mri.webp'
                alt="mri ascend north america 2023"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/lifetime.webp'
                alt="lifetime fitness"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/museum.webp'
                alt="museum of science + industry chicago"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/nurse.webp'
                alt="american association of critical-care nurses"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/marathon.webp'
                alt="life time chicago half marathon + 5k presented by HOKA"
              />
            </Box>
            <Box
              sx={cardStyle}
            >
              <Box
                component='img'
                sx={imgStyle}
                src='/media/client-logos/wbc.webp'
                alt="world business chicago"
              />
            </Box>
            </Box>
        </Box>
      <Divider sx={{backgroundColor: '#CCCC', height: 1}}/>
</>

)}
 

export default SponsorsSection;
