import React from "react";
import NavBar from "../NavBar";
import { Grid, Box, Typography } from "@mui/material";
import TCard from "./TCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  containerStyle,
  titleStyle,
  gridContainerStyle,
  thumbsUpStyle,
} from "./styles";
import testimonialsData from "./testimonialData";

function Testimonials() {
  React.useEffect(() => {
    window.scrollTo({ top: 1 });
  }, []);

  return (
    <div id="testimonials">
      <NavBar />
      <Box id="testimonials" style={containerStyle}>
        <Typography variant="h4" style={titleStyle}>
          What People Say
        </Typography>
        <Grid container style={gridContainerStyle}>
          <ThumbUpIcon style={thumbsUpStyle} />
          {testimonialsData.map(({ content, author }) => (
            <TCard content={content} author={author} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Testimonials;
