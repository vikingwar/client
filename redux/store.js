import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reducer = createReducer({}, (builder) =>
  builder
    .addCase(HYDRATE, (state, action) => {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    })
    .addDefaultCase((state, action) => {
      return rootReducer(state, action);
    })
);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export const makeStore = () => {
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});
