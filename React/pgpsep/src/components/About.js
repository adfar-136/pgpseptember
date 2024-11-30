import React from 'react'

function About({name,age,salary}) {
  return (
    <div>
        <h1>My Name is {name}</h1>
        <h1>My Age is {age}</h1>
        <h1>My Salary is {salary}</h1>
        <h1>Hey {name}</h1>
    </div>
  )
}

export default About