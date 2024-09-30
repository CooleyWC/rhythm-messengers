import React from "react";
import { Grid, CardContent, Container, Divider } from "@mui/material";

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
        <Grid item>
          <CardContent
            component="img"
            src="/media/client-logos/elmilagro.png"
            alt="milagro"
            loading="lazy"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "75px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            src="/media/client-logos/jra.png"
            alt="jra"
            loading="lazy"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "75px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/century21.png"
            alt="c21"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "75px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/decision1.png"
            alt="decision1"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/2friends.png"
            alt="2friends"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/lolla.png"
            alt="lolla"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/att.png"
            alt="att"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/wintrust.png"
            alt="wintrust"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/hand2mind.png"
            alt="hand2mind"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/joeslive.png"
            alt="joeslive"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/flyover.png"
            alt="flyover"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/cabinet.png"
            alt="cabinet"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/mri.png"
            alt="mri"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/lifetime.png"
            alt="lifetime"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/museum.png"
            alt="museum"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/nurse.png"
            alt="nurse"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/marathon.png"
            alt="marathon"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
        <Grid item>
          <CardContent
            component="img"
            loading="lazy"
            src="/media/client-logos/wbc.png"
            alt="wbc"
            style={{
              padding: "0",
              margin: "0",
              maxHeight: "60px",
              maxWidth: "100%",
            }}
          ></CardContent>
        </Grid>
      </Grid>
      <Divider sx={{ height: 1, backgroundColor: "#CCCCCC" }} />
    </Container>
  );
};

export default SponsorsSection;
