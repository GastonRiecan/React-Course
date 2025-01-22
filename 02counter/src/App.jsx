import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  const addValue = () => { setCounter(counter + 1) }

  const restValue = () => { setCounter(counter - 1) }

  return (
    <>
      <h1>React Course whit Hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <hr />
      <button
        onClick={addValue} style={{backgroundColor: "blue"}}
      >Add value</button>
      <hr />
      <button
      onClick={restValue}
      style={{backgroundColor: "red"}}
      >Rest value</button>
      <hr />
      <p>Footer</p>
    </>
  )
}

export default App
