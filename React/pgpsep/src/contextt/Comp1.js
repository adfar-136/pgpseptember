import React, { useContext } from 'react'
import Comp2 from './Comp2'
import { myContext } from './CounterProvider'
export default function Comp1() {
    let {count,setCount} = useContext(myContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>hghf</button>
        <Comp2/>
    </div>
  )
}
