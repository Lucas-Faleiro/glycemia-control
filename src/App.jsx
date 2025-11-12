import { useState } from 'react'
import './App.css'
import PainelGlicemico from './components/PainelGlicemico'
import FatorProvider from './provider/FatorProvider'
import ExibirFatores from './components/ExibirFatores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FatorProvider>
        <PainelGlicemico />
        <ExibirFatores />
      </FatorProvider>
    </div>
  )
}

export default App
