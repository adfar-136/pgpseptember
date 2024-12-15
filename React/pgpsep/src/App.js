import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Routinf/Home'
import About from './Routinf/About'
import Contact from './Routinf/Contact'
import Blog from './Routinf/Blog'
import Shop from './Routinf/Shop'
import Navbar from './Routinf/Navbar'
import User from './Routinf/User'
import Userdetails from './Routinf/Userdetails'
import Adhaar from './Routinf/Adhaar'

export default function App() {
  var a =false;
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <BrowserRouter>
      <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/users' element={<User/>}/>
           <Route path='/users/:id' element={<Userdetails/>}/>
           <Route path='/users/:id/contact/:adhaar' element={<Adhaar/>}/>
           <Route path='/profile' element={<Navigate to={a?"/about":"/contact"}/>}/>
          
         </Routes>
      </BrowserRouter>
    </div>
  )
}
