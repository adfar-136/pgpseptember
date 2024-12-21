const initialstate = {
    backgroundColor:"red"
}
const colorReducer = (state=initialstate,action)=>{
    switch(action.type){
        case "background_color":
            return {...state,backgroundColor:action.payload}
        default:
            return state;
    }
}
export default colorReducer;