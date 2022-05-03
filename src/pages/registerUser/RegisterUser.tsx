import React, { ChangeEvent, useEffect, useState} from "react";

import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./RegisterUser.css";

function RegisterUser() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="background2"></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form>
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
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
              <Link to="/usuarios/logar" className="text-decorator-none">
                <Button variant="contained" color="secondary" className="btnCancelar">
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
