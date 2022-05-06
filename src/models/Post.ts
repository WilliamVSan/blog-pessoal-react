import Theme from "./Theme"

interface Post{
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Theme | null
}

export default Postagem
