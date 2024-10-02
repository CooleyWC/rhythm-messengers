import React from "react";
import NavBar from "../../components/NavBar";
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
import SEO from "../../components/SEO";
import testimonialMetaData from "./testimonialMetaData";

function Testimonials() {
  React.useEffect(() => {
    window.scrollTo({ top: 1 });
  }, []);

  return (
    <div id="testimonials">
      <SEO title="Testimonials" meta={testimonialMetaData} />
      <NavBar />
      <Box id="testimonials" style={containerStyle}>
        <Typography variant="h4" style={titleStyle}>
          What People Say
        </Typography>
        <Grid container style={gridContainerStyle}>
          <ThumbUpIcon style={thumbsUpStyle} />
          {testimonialsData.map(({ content, author }) => (
            <TCard key={author} content={content} author={author} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Testimonials;
