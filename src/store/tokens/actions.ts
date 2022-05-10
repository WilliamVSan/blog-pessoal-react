export type Action = { type: "ADD_TOKEN"; payload: string };//tipando do tipo "Action" 

//Action = Encomenda
export const addToken = (token: string): Action => ({// criando função addToken
    type: "ADD_TOKEN",                               // é como se fosse uma etiqueta: Recebimento
    payload: token                                   // Objeto dentro do pacote? Objeto: Poster
});