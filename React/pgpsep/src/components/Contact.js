import React from 'react'
import Phone from './Phone'

function Contact(props) {
  return (
    <div>
        <Phone number={props.no}/>
    </div>
  )
}

export default Contact