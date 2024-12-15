import React from 'react'
import { useParams } from 'react-router-dom'

export default function Adhaar() {
    const {id,adhaar} = useParams()
  return (
    <div>
        {id === "user1" && adhaar === "123" && (
            <h1>My name is Adfar Rasheed and my adhaar number is 123456789</h1>
        )}
        {id === "user2" && adhaar === "321" && (
            <h1>My name is Saloni Sharma and my adhaar number is 321456789</h1>
        )}
    </div>
  )
}
