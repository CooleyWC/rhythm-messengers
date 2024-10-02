import React from "react";
import { Grid, CardContent, Container, Divider } from "@mui/material";
import sponsorsData from "./sponsersData";

const SponsorsSection = () => {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {sponsorsData.map(({ src, alt }) => {
          return (
            <Grid item key={src}>
              <CardContent
                component="img"
                src={src}
                alt={alt}
                loading="lazy"
                style={{
                  padding: "0",
                  margin: "0",
                  maxHeight: "60px",
                  maxWidth: "100%",
                }}
              ></CardContent>
            </Grid>
          );
        })}
      </Grid>
      <Divider sx={{ height: 1, backgroundColor: "#CCCCCC" }} />
    </Container>
  );
};

export default SponsorsSection;
