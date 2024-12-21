import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";
import todoReducer from "./todoReducer";
import colorReducer from "./colorReducer";
const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    color:colorReducer
})

const store  = createStore(reducer);

export default store;
