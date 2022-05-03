import React from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Home.css";
import TabPost from "../../components/Posts/tabpost/TabPost";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="flex-start" xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja Bem Vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              color="secondary"
              className="botao"
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Box>
          <img className="img" src="https://cdn.streamelements.com/uploads/b89b1bdb-0499-4760-a118-5b961d55c18c.gif" alt="gatinho" />
        </Box>
      </Grid>
      <Grid xs={12} className="postagem">
          <TabPost />
      </Grid>
    </>
  );
}

export default Home;
