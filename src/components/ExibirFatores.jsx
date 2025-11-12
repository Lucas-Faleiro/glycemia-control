import { useContext } from "react";
import fatorContext from "../context/FatorContext";

const ExibirFatores = () => {
    const { controleGlicemico } = useContext(fatorContext);

    return (
        <div>
            <p>FIC: {controleGlicemico.fic}</p>
            <p>Alvo Glicêmico: {controleGlicemico.alvo}</p>
        </div>
    )
}

export default ExibirFatores