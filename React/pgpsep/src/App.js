import React from 'react'

export default function App() {
  var arr= ["HTML","CSS","JS","React"]
  return (
    <div>
      <ul>
        {arr.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
