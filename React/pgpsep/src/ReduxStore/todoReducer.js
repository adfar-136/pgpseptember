const todoReducer = (state=["item1","item2","item3"],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...state,action.payload];
        case "DELETE_TODO":
            return state.filter((item,index)=>index!==action.payload);
        default:
            return state;
    }

}
export default todoReducer;