import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box
} from "@material-ui/core";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

  const [token, setToken] = useLocalStorage('token')
  let history = useNavigate();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    history('/login')
  }
  return (
    <>
      <AppBar position="static" className="back">
        <Toolbar variant="dense" className="bar">
          <Box className="cursor">
            <Typography className="title" variant="h5" color="inherit">
              Blog Pessoal
            </Typography>
          </Box>
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                criar tema
              </Typography>
            </Box>
            </Link>
              <Box mx={1} className="cursor" onClick={goLogout}>
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
