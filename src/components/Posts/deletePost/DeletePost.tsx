import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletePost.css';
import Postagem from '../../../models/Post';
import { buscaId, deleteId } from '../../../services/Service';

function DeletePost() {
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              Tema
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button variant="contained" className="botaoAtualizar" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button variant="contained" size='large' className='botaoCancelar'>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletePost;