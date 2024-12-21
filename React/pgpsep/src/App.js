import React, { useState } from 'react'
import Children from './Children'

export default function App() {
  const [number,setNumber] = useState(10000);
  console.log("parent Component")
  return (
    <div>
      <h1>Number:{number}</h1>
      <button onClick={()=>setNumber(number-1)}>Decrement Button</button>
      <Children />
    </div>
  )
}


