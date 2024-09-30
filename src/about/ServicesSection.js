import React from "react";
import { Typography, Grid } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import FestivalIcon from "@mui/icons-material/Festival";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";

const ServicesSection = () => {
  return (
    <Grid container style={{ backgroundColor: "#f5f5f5", paddingTop: "50px" }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{ textAlign: "center", paddingTop: "40px" }}
      >
        <BusinessIcon style={{ fontSize: "50px" }} />
        <Typography style={{ fontSize: "30px" }}>Trade Shows</Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "18px", fontWeight: "300", padding: "30px" }}
        >
          Stop traffic at your booth with an attraction they won't forget.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{ textAlign: "center", paddingTop: "40px" }}
      >
        <FestivalIcon style={{ fontSize: "50px" }} />
        <Typography style={{ fontSize: "30px" }}>Festivals</Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "18px", fontWeight: "300", padding: "30px" }}
        >
          Main stage or impromptu, We light the fuse to festival fun.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{ textAlign: "center", paddingTop: "40px" }}
      >
        <WorkIcon style={{ fontSize: "50px" }} />
        <Typography style={{ fontSize: "30px" }}>Corporate Events</Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "18px", fontWeight: "300", padding: "30px" }}
        >
          Give your company an event to remember with our rhythmic beats.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        style={{ textAlign: "center", paddingTop: "40px" }}
      >
        <GroupsIcon style={{ fontSize: "50px" }} />
        <Typography style={{ fontSize: "30px" }}>Sessions</Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "18px", fontWeight: "300", padding: "30px" }}
        >
          Kick off the meeting with an electrifying and high energy atmosphere.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicesSection;
