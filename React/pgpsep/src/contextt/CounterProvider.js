import React, { createContext, useState } from 'react'
let myContext  = createContext()
export default function CounterProvider({children}) {
    const [count,setCount]= useState(0)
    
  return (
    <myContext.Provider value={{count,setCount}}>
        {children} 
    </myContext.Provider>
  )
}
export {myContext}
