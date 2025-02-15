import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OpputunitiesComponent from './components/OpputunitiesComponent'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<OpputunitiesComponent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}
