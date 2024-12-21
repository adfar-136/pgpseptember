import { applyMiddleware, createStore } from "redux";
import countReducer from "./reducer";
import { thunk } from "redux-thunk";

const storee = createStore(countReducer,applyMiddleware(thunk))
export default storee;