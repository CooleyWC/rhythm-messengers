import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import TCard from "./TCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  containerStyle,
  titleStyle,
  gridContainerStyle,
  thumbsUpStyle,
} from "./testimonialsStyles";
import testimonialsData from "./testimonialData";
import SEO from "../../components/SEO";
import testimonialMetaData from "./testimonialMetaData";

function Testimonials() {
  React.useEffect(() => {
    window.scrollTo({ top: 1 });
  }, []);

  return (
    <div id="testimonials">
      <SEO meta={testimonialMetaData} />
      <Box id="testimonials" sx={containerStyle}>
        <Typography variant="h4" sx={titleStyle}>
          What People Say
        </Typography>
        <Grid container sx={gridContainerStyle}>
          <ThumbUpIcon sx={thumbsUpStyle} />
          {testimonialsData.map(
            ({ content, author, src, alt, authorTitle }) => (
              <TCard
                key={author}
                content={content}
                author={author}
                src={src}
                alt={alt}
                authorTitle={authorTitle}
              />
            )
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default Testimonials;
