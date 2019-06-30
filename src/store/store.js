import { createStore } from "redux";
import initialState from "./initialState.js";
import mainReducer from "../reducers/mainReducer.js";

const store = createStore(
    mainReducer,
    initialState
);

export default store;