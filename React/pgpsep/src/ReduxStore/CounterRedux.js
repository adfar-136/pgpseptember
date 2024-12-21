import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './action'
export default function CounterRedux() {
    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <h1>count:{count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}