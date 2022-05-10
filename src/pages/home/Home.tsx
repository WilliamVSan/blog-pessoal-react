import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import TabPost from "../../components/Posts/tabpost/TabPost";
import ModalPost from "../../components/Posts/modalPost/ModalPost";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {

  let history = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      history("/login")
    }
  });

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="caixa"
      >
        <Grid className="backgroundt" alignItems="flex-start" xs={6}>
          <Box padding={5}>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="h4"
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
          <Box display="flex" justifyContent="center" marginBottom={3}>
            <Box marginRight={1}></Box>
            <Link to = "/postagens" className="text-decorator-none">
            <Button
              variant="outlined"
              className="botaoVer"
            >
              Ver Postagens
            </Button>
            </Link>
            <Box paddingLeft={5} className="botao">
          <ModalPost/>
          </Box>
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
