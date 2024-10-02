import React, { lazy } from "react";
import { Grid, CardMedia } from "@mui/material";

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
        src="/media/RMEWebsiteTeaser.mp4"
        autoPlay
        loop
        muted
        title="RM-promo-video"
        playsInline
        onLoad={lazy}
      ></CardMedia>
    </Grid>
  );
}

export default Video;
