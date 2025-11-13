import { useContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import FatorContext from "../context/FatorContext";

const DoseTotalCard = ({carbsRefeicao, doseCorretiva}) => {
    const {controleGlicemico} = useContext(FatorContext);
    const [doseAlta, setDoseAlta] = useState(false);

    const doseTotal = useMemo(() => {
        const fic = controleGlicemico.fic;
        const doseRefeicao = carbsRefeicao / fic;
        return (doseRefeicao + doseCorretiva).toFixed(2);
    }, [carbsRefeicao, doseCorretiva, controleGlicemico.fic]);

    const doseCard = useRef()

    useLayoutEffect(() => {
        if (doseTotal >= 15) {
            doseCard.current.style.borderColor = 'red';
            doseCard.current.style.borderWidth = '4px';
            setDoseAlta(true);
        } else {
            setDoseAlta(false);
            doseCard.current.style.borderColor = 'black';
            doseCard.current.style.borderWidth = '2px';
        }
    }, [doseTotal]);

    return (
        <div ref={doseCard} style={{border: '2px solid black', width: '400px', padding: '10px', marginTop: '10px', justifySelf: 'center'}}>
            <h4 style={{margin: '0'}}>Dose Total de Insulina</h4>
            <div >{doseTotal} Unidades</div>
            {doseAlta && <div style={{color: 'red', fontWeight: 'bold'}}>Atenção: Dose de insulina muito alta! Verifique os valores inseridos</div>}
        </div>  
    )
}

export default DoseTotalCard;