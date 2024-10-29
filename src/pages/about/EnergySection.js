import React from "react";
import { Box, Typography, Divider, Grid, CardMedia } from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

const EnergySection = () => {
  return (
    <Box>
      <Divider sx={{ height: 1, backgroundColor: "#CCCCCC" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "3rem", xl: "4rem" },
              color: "#007FFF",
              paddingTop: "70px",
              paddingBottom: "30px",
            }}
          >
            Energy
          </Typography>
          <BatteryChargingFullIcon
            sx={{
              color: "#007FFF",
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
            Ignite your event with our choreographed, high energy drumming that
            will get your guests jumping out of their chairs!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{ display: "flex", 
          justifyContent: "flex-end", 
         }}
        >
          <CardMedia
            component="img"
            src="/media/RME-energy2.webp"
            alt="drumming with snares and cymbals"
            loading="lazy"
            width={300}
            height={300}
            sx={{
              maxWidth: "100%",
              width: 'auto',
              height: "100%",
              objectFit: "cover",
              margin: 0,
              padding: 0,
            }}
          ></CardMedia>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnergySection;
