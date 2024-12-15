import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetails() {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
        {id === "user1" && (
            <h1>Adfar Rasheed, 28,5000</h1>
        
        )}
        {id === "user2" && (
            <h1>Manoj g,25,200000</h1>
        )}
        {id === "user3" && (
            <h1>Nikhil P,23,12345678</h1>
        )}
    </div>
  )
}
