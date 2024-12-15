import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>COntact</h1>
      <button onClick={()=>navigate("/")}>GO to Home</button>
    </div>
  )
}
