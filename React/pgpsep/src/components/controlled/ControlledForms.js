import React, { useState } from 'react'

export default function ControlledForms() {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [condition,setCondition] =useState(false)
    function handleSubmit(e){
        e.preventDefault()
       setCondition(true)
    }
    // {
    //     name:"ADfar",
    //     email:"a@a.com",
    //     password:"1234",
    //     name:"gdhfjjshdfg"
    // }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder='ENter Name'
            value={data.name} onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}/> <br /><br />
            <input type="email" placeholder='Enter Email'
            value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/> <br /><br />
            <input type="password" placeholder='Enter Password'
            value={data.password} onChange={(e)=>setData((prev)=>({...prev,password:e.target.value}))}/> <br /><br />
            <input type="submit" value="SUbmit" />
            {condition ? <h1>My Name is {data.name} and my email is {data.email} and my password is {data.password}hkgdgfh</h1>:"Please submit the form"}
        </form>
        
    </div>
  )
}


//mounting 

//updation

//unmounting