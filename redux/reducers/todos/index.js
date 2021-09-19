import { createReducer, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { GET_ALL_TODO_SUCCESS } from "../../actions/todo";

const todo = {
  list: [],
};

const todoReducer = createReducer(todo, (builder) =>
  builder.addCase(GET_ALL_TODO_SUCCESS.type, (state, action) => {
    return {
      ...state,
      list: action.payload,
    };
  })
);

export default todoReducer;
