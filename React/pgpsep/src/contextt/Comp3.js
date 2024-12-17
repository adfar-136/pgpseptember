import React, { useContext } from 'react'
import { firstName } from '../App'
export default function Comp3() {
  let fname = useContext(firstName)
  return (
    <div>
        <h1> My firstname is {fname}</h1>
    </div>
  )
}
