import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

const AboutSection = () => {
  const aboutTitleStyle = {
    marginTop: "40px",
    marginBottom: "40px",
    paddingTop: "20px",
    paddingBottom: "40px",
    backgroundColor: "#141A1F",
  };
  return (
    <Box>
      <Divider sx={{ height: 1, backgroundColor: "#CCCCCC" }} />
      <Grid container>
        <Grid item xs={12} style={aboutTitleStyle}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "3.5rem", xl: "4.5rem" },
              color: "#f77a00",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                lg: "1.5rem",
                xl: "1.8rem",
              },
              fontWeight: "light",
              lineHeight: { xs: "1.4", sm: "1.3", md: "1.4", lg: "1.5" },
              p: {
                xs: "0 2.7rem 2.5rem 2.7rem",
                sm: "1.5rem 5rem",
                md: "2rem 5.2rem 4rem 5.2rem",
                lg: "2rem 16rem 3rem 16rem",
                xl: "2.5rem 20rem 2.5rem 20rem",
              },
              textAlign: "left",
            }}
          >
            The Rhythm Messengers are an adaptable crew of highly animated
            drummers and entertainers who are ready to elevate the energy of
            your next event!
            <br />
            <br />
            We are a collection of performers drawing from Chicago’s best
            drumming productions. We’ll tailor-make our show to best fit your
            event needs and venue.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
