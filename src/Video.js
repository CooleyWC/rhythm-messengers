import React from "react";
import { Grid, CardMedia, Typography } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

function Video() {
  const gridContainerStyle = {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Grid container style={gridContainerStyle}>
      <CardMedia
        component="video"
        src="/media/freecompress-RMEWebsiteTeaser.mp4"
        loop
        muted
        title="RM-promo-video"
        playsInline
        controls
        aria-describedby='video-description'
      ></CardMedia>
      <Typography id='video-description' variant='srOnly' sx={visuallyHidden}>
        This is a promotional video for the Rhythm Messengers entertainment company. It includes video without sound showing the group drumming at various concerts, sporting events, and corporate events.
      </Typography>
    </Grid>
  );
}

export default Video;
