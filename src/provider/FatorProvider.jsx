import { useReducer } from "react";
import FatorContext from "../context/FatorContext";

const fatorReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case 'SET_FIC':
            return {...state, fic: action.payload };
        case 'SET_ALVO':
            return {...state, alvo: action.payload };
        default:
            return state;
    }
}

const FatorProvider = ({ children }) => {
        const [controleGlicemico, dispatch] = useReducer(fatorReducer, {
            fic: 10,
            alvo: 100
        });

    const contextValue = {
        controleGlicemico,
        dispatch
    };
    return (
        <FatorContext.Provider value={contextValue}>
            {children}
        </FatorContext.Provider>
    )
}

export default FatorProvider;