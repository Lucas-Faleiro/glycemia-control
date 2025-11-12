import {  useReducer, useState } from "react"

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

const PainelGlicemico = () => {
    const [glicemiaAtual, setGlicemiaAtual] = useState('120');
    const [carbsRefeicao, setCarbsRefeicao] = useState('50');
    const [controleGlicemico, dispatch] = useReducer(fatorReducer, {
        fic: 10,
        alvo: 100
    });

    // console.log(currGlycemia, mealCarbs)
    const handleAjusteRapido = () => {
        dispatch({type: 'SET_FIC', payload: 8});
        dispatch({type: 'SET_ALVO', payload: 90});
    }

    console.log(controleGlicemico.fic, controleGlicemico.alvo);
    

    return (
        <div>
            <label htmlFor="curr-glycemia">Glicemia Atual:</label>
            <input type="number" name="curr-glycemia" id="curr-glycemia" min={0} onChange={(e) => setGlicemiaAtual(e.currentTarget.value)} />
            <label htmlFor="meal-carbs">Carboidratos da Refeição:</label>
            <input type="number" name="meal-carbs" id="meal-carbs" min={0} onChange={(e) => setCarbsRefeicao(e.currentTarget.value)} />
            <button onClick={handleAjusteRapido}>Ajuste Rápido</button>
        </div>
    )
}

export default PainelGlicemico