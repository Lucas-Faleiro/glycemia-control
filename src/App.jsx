import { useState } from 'react'
import './App.css'
import PainelGlicemico from './pages/PainelGlicemico'
import FatorProvider from './provider/FatorProvider'
import ExibirFatores from './components/ExibirFatores'

function App() {


  return (
    <div>
      <FatorProvider>
        <PainelGlicemico />
      </FatorProvider>
    </div>
  )
}

export default App
