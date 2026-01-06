import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24 }}>
      <h1>Controle de Gastos Residenciais</h1>
      <p>Frontend React + TypeScript (Vite)</p>
      <button onClick={() => setCount((c) => c + 1)}>Clique ({count})</button>
    </div>
  )
}

export default App
