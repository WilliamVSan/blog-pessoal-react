import React from "react";
import { AppBar, Toolbar, Typography, Box, createTheme } from "@material-ui/core";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static" className="back">
        <Toolbar variant="dense" className="bar">
          <Box style={{ cursor: "pointer" }}>
            <Typography className="title" variant="h5" color="inherit">
              Games Indie
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography className="green" variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography className="red" variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
