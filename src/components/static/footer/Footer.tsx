import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@material-ui/core";

import { useNavigate } from "react-router-dom";

import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

  let history = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  var footerComponent

  if (token !== "") {
    footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box className="box5">
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              className="textos"
            >
              Siga-nos nas redes sociais{" "}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a
              href="https://github.com/WilliamVSan"
              target="_blank"
            >
              <GitHubIcon className="redes2" />
            </a>
            <a
              href="https://www.instagram.com/williamvsantoss/"
              target="_blank"
            >
              <InstagramIcon className="redes" />
            </a>
            <a
              href="https://www.linkedin.com/in/william-v-santos/"
              target="_blank"
            >
              <LinkedInIcon className="redes" />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className="textos"
            >
              © 2022 Copyright:
            </Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org">
              <Typography
                variant="subtitle2"
                gutterBottom
                align="center"
                className="textos"
              >
                brasil.generation.org
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  }

  return (
    <>{footerComponent}</>
  );
}

export default Footer;
