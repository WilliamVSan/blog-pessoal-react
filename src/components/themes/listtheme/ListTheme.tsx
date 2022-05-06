import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Theme';
import './ListTheme.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListTheme() {
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      history("/login")
    }
  }, [token])

  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map((item) =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {item.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${item.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="botaoAtualizar" size='small'>
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${item.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className='botaoCancelar'>
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListTheme;