import { useContext, useMemo } from "react";
import FatorContext from "../context/FatorContext";

const DoseTotalCard = ({carbsRefeicao, doseCorretiva}) => {
    const {controleGlicemico} = useContext(FatorContext);
    const doseTotal = useMemo(() => {
        const fic = controleGlicemico.fic;
        const doseRefeicao = carbsRefeicao / fic;
        return (doseRefeicao + doseCorretiva).toFixed(2);
    }, [carbsRefeicao, doseCorretiva, controleGlicemico.fic]);

    return (
        <div>{doseTotal}</div>
    )
}

export default DoseTotalCard;