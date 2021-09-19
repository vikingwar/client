import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import todoReducer from "./todos";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
