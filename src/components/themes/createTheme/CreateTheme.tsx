import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CreateTheme.css';
import useLocalStorage from 'react-use-localstorage';
import Theme from '../../../models/Theme';
import { buscaId, post, put } from '../../../services/Service';


function CadastroTema() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [theme, setTheme] = useState<Theme>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTheme, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTheme({
                ...theme,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("theme " + JSON.stringify(theme))
    
            if (id !== undefined) {
                console.log(theme)
                put(`/temas`, theme, setTheme, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            } else {
                post(`/temas`, theme, setTheme, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            history('/temas')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro theme</Typography>
                <TextField value={theme.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;