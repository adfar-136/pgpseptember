import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate(-1)}>Back</button>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
    </div>
  )
}
