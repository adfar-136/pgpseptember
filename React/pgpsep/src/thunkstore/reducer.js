const countReducer =(state=50,action)=>{
    if(action.type==="INCREMENT"){
      return state+action.payload;
    }  else if(action.type==="DECREMENT"){
      return state-action.payload;
    }
    else{
      return state;
    }
  }
  
  export default countReducer