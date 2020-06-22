import React, { useState } from 'react'
import { Display } from './Display.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>You pressed the count button {count} times</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App
