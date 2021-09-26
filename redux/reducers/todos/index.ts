import { createReducer } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";
import { GET_ALL_TODO_SUCCESS } from "../../actions/todo";

interface ITodo {
  list: Array<Record<string, any>>;
}

const todo: ITodo = {
  list: []
};

const todoReducer = createReducer(todo, (builder) =>
  builder.addCase(GET_ALL_TODO_SUCCESS.type, (state, action: any) => {
    return {
      ...state,
      list: action.payload
    };
  })
);

export default todoReducer;
