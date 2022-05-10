import { Action } from "./actions";

//Indica o tipo de informação que nossa store vai receber
export interface TokenState{
    tokens: string
}

//Indica o estado inicial da nossa Store
const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type) {
        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }

        default:
            return state
    }
}