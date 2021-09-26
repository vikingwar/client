import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reducer = createReducer({} as any, (builder) =>
  builder
    .addCase(HYDRATE, (state, action: any) => {
      const nextState = {
        ...state,
        ...action.payload
      };
      return nextState;
    })
    .addDefaultCase((state, action: any) => {
      return rootReducer(state, action);
    })
);

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

export const makeStore = () => {
  (store as any).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false
});
