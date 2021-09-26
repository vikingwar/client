import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../../../utils/API";
import { GET_ALL_TODO, GET_ALL_TODO_SUCCESS } from "../../actions/todo";

export function* getAllTodoSaga() {
  try {
    let result: Promise<Response> = yield call(async () =>
      callAPI({
        url: "https://jsonplaceholder.typicode.com/todos"
      })
    );

    yield put(GET_ALL_TODO_SUCCESS(result));
  } catch (e) {
    // eslint-disable-next-line
    debugger;
  }
}

export default function* todoSaga() {
  yield takeEvery(GET_ALL_TODO.type, getAllTodoSaga);
}
