import { useState } from 'react'
import './App.css'
import PainelGlicemico from './PainelGlicemico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PainelGlicemico />
    </div>
  )
}

export default App
