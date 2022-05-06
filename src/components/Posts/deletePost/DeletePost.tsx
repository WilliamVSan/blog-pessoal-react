import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletePost.css';
import Postagem from '../../../models/Post';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function DeletePost() {
   
  let history = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [token, setToken] = useLocalStorage('token');

    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history('/postagens')

        try {
            await deleteId(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            alert('Postagem deletada com sucesso');
        } catch (error) {
            alert('Erro ao deletar');
        }
    }

    function nao() {
        history('/postagens')
    }

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
                                { post?.titulo }
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="botaoAtualizar" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size='large' className='botaoCancelar'>
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletePost