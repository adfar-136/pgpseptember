import React from 'react'
import { useRef } from 'react'

export default function App() {
  const nameRef = useRef()
  const emailRef = useRef()
  const hRef = useRef()
  function handleClick(e){
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
  }
  function handleH(){
    console.log(hRef.current)
    hRef.current.innerHTML = "Good Morning";
    hRef.current.style.backgroundColor = "red"
  }
  return (
    <div>
      <h1 ref={hRef}>Adfar Rasheed</h1>
      <button onClick={handleH}>done</button>

      <form>
        <input type="text" placeholder='Enter Name' ref={nameRef}/>
        <input type="text" placeholder='etrd' ref={emailRef}/>
        
        <button onClick={handleClick}>CLick</button>
      </form>
    </div>
  )
}
