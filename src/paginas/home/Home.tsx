import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        style={{ backgroundColor: "#3F51B5" }}
        className="body"
      >
        <Grid alignItems="center" xs={12} sm={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white", fontWeight: "bold", textShadow: "4px 2px 1px grey"}}
            >
              Seja Bem Vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "white", fontWeight: "bold", textShadow: "4px 2px 1px grey" }}
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                borderColor: "black",
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold"
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
        <Box>
          <img className="img" src="https://cdn.streamelements.com/uploads/b89b1bdb-0499-4760-a118-5b961d55c18c.gif" alt="gatinho" />
        </Box>
      </Grid>
    </>
  );
}

export default Home;
