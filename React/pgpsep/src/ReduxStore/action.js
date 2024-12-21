export const increment=()=>{
    return {
        type:"INCREMENT"
    }
}
export const decrement = ()=>{
    return {
        type:"DECREMENT"
    }
}

export const addTodo=(todo)=>{
    return {
     type:"ADD_TODO",
     payload:todo
    }
 }
 export const deleteTodo = (todo)=>{
     return {
         type:"DELETE_TODO",
         payload:todo
     }
 }

 export const setBackgroundColor = (color)=>{
    return {
        type:"background_color",
        payload:color,
    }
}