import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deleteTodo } from './action';
export default function Todoredux() {
    const todo = useSelector((state)=>state.todo);
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    function handleAdd(){
        dispatch(addTodo(text));
        setText("");
    }
  return (
    <div>
        <h1>Todo Redux</h1>
        <input type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>ADD Todo</button>
        <ul>
            {todo.map((item,index)=>{
                return <li key={index}>{item}
                <button onClick={()=>dispatch(deleteTodo(index))}>Remove</button>
                </li>
            })}
        </ul>
    </div>
  )
}