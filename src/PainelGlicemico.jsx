import { use, useState } from "react"

const PainelGlicemico = () => {
    const [currGlycemia, setCurrentGlycemia] = useState('120');
    const [mealCarbs, setMealCarbs] = useState('50');
    const [fic, setFic] = useState('10');
    const [targetGlycemia] = useState('100');

    console.log(currGlycemia, mealCarbs)

    return (
        <div>
            <label htmlFor="curr-glycemia">Glicemia Atual:</label>
            <input type="number" name="curr-glycemia" id="curr-glycemia" min={0} onChange={(e) => setCurrentGlycemia(e.currentTarget.value)} />
            <label htmlFor="meal-carbs">Carboidratos da Refeição:</label>
            <input type="number" name="meal-carbs" id="meal-carbs" min={0} onChange={(e) => setMealCarbs(e.currentTarget.value)} />
        </div>
    )
}

export default PainelGlicemico