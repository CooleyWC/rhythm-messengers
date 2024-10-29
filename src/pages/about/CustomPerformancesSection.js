import React from "react";
import { Box, Typography, Divider, Grid, CardMedia } from "@mui/material";
import SpeakerIcon from "@mui/icons-material/Speaker";

const CustomPerformancesSection = () => {
  return (
    <Box>
      <Divider sx={{ backgroundColor: "#CCCCCC", height: 1 }} />
      <Grid
        container
        sx={{ backgroundColor: "#141A1F", padding: 0, margin: 0 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            order: { xs: 2, md: 1 },
            display: "flex",
            justifyContent: "flex-end",
            margin: 0,
            padding: "0 !important",
          }}
        >
          <CardMedia
            component="img"
            src="/media/RME-custom.webp"
            alt="drumming photo with snares and tenors"
            loading="lazy"
            width={300}
            height={300}
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              height: "100%",
              margin: 0,
              padding: 0,
            }}
          ></CardMedia>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          sx={{ order: { xs: 1, md: 2 } }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "3rem", xl: "4rem" },
              color: "#FF3300",
              paddingTop: "70px",
              paddingBottom: "30px",
            }}
          >
            Custom Performances
          </Typography>
          <SpeakerIcon
            sx={{
              color: "#FF3300",
              fontSize: {
                xs: "4rem",
                sm: "4.5rem",
                md: "5rem",
                xl: "5.5rem",
              },
              margin: "0 auto",
              display: "block",
              paddingBottom: "50px",
            }}
          />
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "white",
              fontSize: {
                xs: "1.2rem",
                sm: "1.3rem",
                lg: "1.4rem",
                xl: "1.6rem",
              },
              fontWeight: "light",
              lineHeight: { xs: "1.4", sm: "1.3", md: "1.4" },
              p: {
                xs: "0 2.7rem 2.5rem 2.7rem",
                sm: "1.5rem 5rem 2rem 5rem",
                md: "2rem 5.2rem 4rem 5.2rem",
                lg: "2.5rem 7rem 5rem 7rem",
                xl: "2.7rem 12rem 5rem 12rem",
              },
              textAlign: "center",
            }}
          >
            Your event will take center stage when the Rhythm Messengers make
            their appearance. Your guests will jump, stomp and dance your event
            away!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomPerformancesSection;
