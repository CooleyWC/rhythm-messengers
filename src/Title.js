import React from "react";
import { Grid, CardMedia } from "@mui/material";
import Stack from "@mui/material/Stack";

function Title() {
  const gridContainerStyle = {
    backgroundColor: "black",
    margin: 0,
    padding: 0,
  };

  const imageStyle = {
    maxWidth: "55%",
    maxHeight: "55%",
    width: "auto",
    height: "auto",
    marginTop: "25px",
    objectFit: "cover",
  };

  const titleStyle = {
    maxWidth: "75%",
    marginTop: "-55px",
    width: "auto",
    height: "auto",
  };

  return (
    <Grid container style={gridContainerStyle}>
      <Grid item>
        <Stack alignItems="center">
          <CardMedia
            component="img"
            src="media/RMELogo300-2-no-background.webp"
            alt="drum-logo"
            style={imageStyle}
            width={300}
            height={300}
            loading="lazy"
          />
          <CardMedia
            component="img"
            width={300}
            height={300}
            src="media/RMELogo300-2-titleonly-2.webp"
            alt="rhythm-messengers"
            style={titleStyle}
            loading="lazy"
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Title;
