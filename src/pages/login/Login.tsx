import React, { ChangeEvent ,useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service"

import "./Login.css";
import { addToken } from "../../store/tokens/actions";
import { useDispatch } from "react-redux";

function Login() {

  let history = useNavigate()

  const dispatch = useDispatch();

  const [token, setToken] = useState('')

  const [userLogin, setUserLogin] = useState<UserLogin>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
  })

  useEffect(() => {
      if(token !== ""){
          dispatch(addToken(token))
          history('/home')
      }
  }, [token])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value           
      })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault()
      
      try {
          await login(`/usuarios/logar`, userLogin, setToken)
          alert("Usuário logado com sucesso")

      } catch (error) {
          alert("Dados do usuário incorretos")
      }
  }
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box padding={20}>
          <form onSubmit={ onSubmit}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="bold"
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              value={ userLogin.usuario }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              value={ userLogin.senha }
              onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" className="btnLogar">
                  Logar
                </Button>
            </Box>
          </form>
          <Box>
            <Box marginTop={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta
              </Typography>
            </Box>
            <Link to={"/cadastrar"} className="register">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="background"></Grid>
    </Grid>
  );
}

export default Login;
