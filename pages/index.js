// import type { NextPage } from "next";
import { useEffect } from "react";
import { END } from "redux-saga";

import { GET_ALL_TODO } from "../redux/actions/todo";
import { wrapper } from "../redux/store";
import { useAppSelector } from "../utils/Hook";

const Home = () => {
  const { list } = useAppSelector((state) => state.todoReducer);

  return (
    <main>
      <div>Hello World!</div>

      <ul>
        {list.length > 0 &&
          list.map((value) => <li key={value?.id}>{value?.title} </li>)}
      </ul>
    </main>
  );
};

export default Home;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // regular stuff
  store.dispatch(GET_ALL_TODO());
  // end the saga
  store.dispatch(END);

  await store.sagaTask.toPromise();
  console.log("on here");
  return {
    props: {},
  };
});
