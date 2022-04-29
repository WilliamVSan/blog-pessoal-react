import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  createTheme,
} from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="back">
        <Toolbar variant="dense" className="bar">
          <Box className="cursor">
            <Typography className="title" variant="h5" color="inherit">
              Games Indie
            </Typography>
          </Box>
          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography className="green" variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography className="red" variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
