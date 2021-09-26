import { createAction } from "@reduxjs/toolkit";

export const GET_ALL_TODO = createAction("GET_ALL_TODO");
export const GET_ALL_TODO_SUCCESS = createAction<any>("GET_ALL_TODO_SUCCESS");
