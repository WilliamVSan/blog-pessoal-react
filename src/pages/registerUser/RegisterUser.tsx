import React, { ChangeEvent, useEffect, useState } from "react";

import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

import "./RegisterUser.css";

function RegisterUser() {

  let history = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (userResult.id !== 0) {
      history("/usuarios/logar")
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()


    if (confirmarSenha === user.senha && user.senha.length >= 8) {


      try {
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')


      } catch (error) {
        console.log(`Error: ${error}`)


        alert("Erro ao cadastrar o Usuário")
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')

      setUser({ ...user, senha: "" })
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="background2"></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="bold2"
            >
              Cadastro
            </Typography>
            <TextField
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              placeholder="Digite o seu nome."
              required
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              fullWidth
            />
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              placeholder="Digite seu e-mail."
              required
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              placeholder="Digite uma senha."
              required
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              fullWidth
            />
            <TextField
              id="confirmarSenha"
              label="confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              placeholder="Confirme a sua senha."
              required
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" className="btnCadastrar">
                Cadastrar
              </Button>
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterUser;
