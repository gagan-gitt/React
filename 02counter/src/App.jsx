import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0)

const increment = () => {
  
  if(counter >= 0 && counter < 20){

    setCounter(counter + 1)
  }

}

const decrement = () => {
  
  if(counter > 0){

    setCounter(counter - 1)
  }
  
}

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
