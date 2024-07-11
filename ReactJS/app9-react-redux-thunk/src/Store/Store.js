import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { RootReducer } from "./Reducer";
export const Store = createStore(RootReducer, applyMiddleware(thunk));
