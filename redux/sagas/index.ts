import { all } from "@redux-saga/core/effects";
import todoSaga from "./todo";

export default function* rootSaga() {
  yield all([todoSaga()]);
}
