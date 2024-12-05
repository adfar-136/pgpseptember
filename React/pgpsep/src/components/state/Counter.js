import React,{useState} from 'react'

export default function Counter() {
    // var count = 0;
    // function handleIncrement(){
    //     count=count+1
    //     console.log(count)
    // }
    //1 . mechanism you should be able to tell react to trigger a rerender
    //2. we wont be able to persist the value of the var between rerendering
    const [count,setCount]= useState(0)
   
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment Count</button>
    </div>
  )
}
