export const incrementStore =(number)=>{
    return (dispatch)=>{
       dispatch({
          type:"INCREMENT",
          payload:number
       })
    }
  }
  export const decrementStore =(number)=>{
      return (dispatch)=>{
          dispatch({
              type:"DECREMENT",
              payload:number
          })
      }
  }