import {  useContext, useEffect, useMemo, useState } from "react"
import FatorContext from "../context/FatorContext";
import ExibirFatores from "../components/ExibirFatores";
import DoseTotalCard from "../components/DoseTotalCard";


const PainelGlicemico = () => {
    const [glicemiaAtual, setGlicemiaAtual] = useState('120');
    const [carbsRefeicao, setCarbsRefeicao] = useState('50');
    const { controleGlicemico, dispatch } = useContext(FatorContext);

    const FSI = 50;

    const doseCorretiva = useMemo(() => {
        if(glicemiaAtual <= controleGlicemico.alvo) return 0;
        return (glicemiaAtual - controleGlicemico.alvo) / FSI;
    }, [glicemiaAtual, controleGlicemico.alvo, FSI]);

    // console.log(currGlycemia, mealCarbs)
    const handleAjusteRapido = () => {
        dispatch({type: 'SET_FIC', payload: 8});
        dispatch({type: 'SET_ALVO', payload: 90});
    }

    useEffect(() => {
        if (glicemiaAtual < 70) {
            console.warn('ALERTA: Hipoglicemia. Favor consumir carboidratos!');
        }
        console.log(`[Monitoramento] Glicemia alterada para: ${glicemiaAtual}mg/dL`);
    }, [glicemiaAtual]);


    

    return (
        <div>
            <label htmlFor="curr-glycemia">Glicemia Atual:</label>
            <input type="number" name="curr-glycemia" id="curr-glycemia" min={0} value={glicemiaAtual} onChange={(e) => setGlicemiaAtual(e.currentTarget.value)} />
            <label htmlFor="meal-carbs">Carboidratos da Refeição:</label>
            <input type="number" name="meal-carbs" id="meal-carbs" min={0} value={carbsRefeicao} onChange={(e) => setCarbsRefeicao(e.currentTarget.value)} />
            <button onClick={handleAjusteRapido}>Ajuste Rápido</button>
            <p>Dose Corretiva: {doseCorretiva}</p>
            <ExibirFatores />
            <DoseTotalCard carbsRefeicao={carbsRefeicao} doseCorretiva={doseCorretiva} />
        </div>
    )
}

export default PainelGlicemico