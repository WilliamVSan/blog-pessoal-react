import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import Post from '../../../models/Post';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import './ListPost.css';
import { toast } from 'react-toastify';

function ListPost() {

  let history = useNavigate()

  const [posts, setPosts] = useState<Post[]>([])//ele é colocado entre o useState e () para pegar uma array[lista] de objetos.

  const token = useSelector<TokenState, TokenState["tokens"]>(//acessando a store, pegando a tokens de state e colocando o valor na const token
    (state) => state.tokens
  )//é o nome que aparece no armazenamento interno.

  useEffect(() => {
    if (token === "") {//se o token estiver vazio
      toast.warn('você precisa estar logado', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });//vai alertar
      history('/login')//e manter no login?
    }
  }, [token])

  async function getThemes() {
    await busca("/postagens", setPosts, {
      headers: {//é o campo equivalente a onde você colocava a Authorization/Token pelo insomnia.
        "Authorization": token//deve ser usado quando é necessário o token que tem header: na Service??
      }
    })
  }

  useEffect(() => {
    getThemes()
  }, [posts.length])

  return (
    <>
      {
        posts.map((item) => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${item.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="botaoAtualizar" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${item.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="botaoCancelar">
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

export default ListPost;
