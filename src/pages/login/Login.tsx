import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box padding={20}>
          <form>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Box>
            <Box marginTop={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Cadastre-se
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} style={{
         backgroundImage: `url(https://camo.githubusercontent.com/40778cdded69af0df0c40f56d0d5b1b35188b7704664ea24e0b8024234aba9ea/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d6874747073253341253246253246646174612e77686963646e2e636f6d253246696d616765732532463238373732323934392532466f726967696e616c2e67696626663d31266e6f66623d31)`,
         backgroundRepeat: "no-repeat", width: "100vh", minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "left"

      }}>

      </Grid>
    </Grid>
  );
}

export default Login;
