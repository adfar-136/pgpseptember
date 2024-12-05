import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count,setCount] = useState(0)
  function handleIncrement(){
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+2)
    setCount((prev)=>prev+3)
    setCount(count+1)
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment ++++</button>
    </div>
  )
}
