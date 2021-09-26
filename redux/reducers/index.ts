import { combineReducers } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

import todoReducer from "./todos";

const rootReducer = combineReducers({
  todoReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
