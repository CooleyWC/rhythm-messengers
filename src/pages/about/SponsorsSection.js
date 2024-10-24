import React from "react";
import { Divider, Box, Typography } from "@mui/material";
import sponsorsData from "./sponsersData";
import {keyframes} from '@mui/system'

const slide = keyframes `
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-50%)
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
              animation: `60s infinite linear ${slide}`
              }}>
              {[...sponsorsData, ...sponsorsData].map(({src, alt}, index)=>(
                <Box key={index} sx={cardStyle}>
                  <Box
                    component='img'
                    sx={imgStyle}
                    src={src}
                    alt={alt}
                  />
                </Box>
              ))}
            </Box>
        </Box>
      <Divider sx={{backgroundColor: '#CCCC', height: 1}}/>
</>
)}

export default SponsorsSection;
