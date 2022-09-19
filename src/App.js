import React, { useEffect, useReducer } from "react";
import Search from "./Components/Search";
import HackerNews from "./Components/HackerNews";
import { reducer } from "./Components/reducer";
const initialState = {
  hits: [],
  page: 0,
  nbPages: 0,
  query: "elizabeth",
  loading: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hits, nbPages, page, query } = state;

  const fetchUrl = async () => {
    const { query, page } = state;
    dispatch({ type: "SET LOADING" });
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
    );
    const data = await res.json();
    console.log(data);
    dispatch({ type: "SET DATA", payload: data });
    dispatch({ type: "RESET LOADING" });
  };

  useEffect(() => {
    fetchUrl();
  }, [query, page]);

  const filterBtn = (id) => {
    dispatch({ type: "FILTER BTN", payload: id });
  };

  const onHandleChange = (e) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  const handlePages = (id) => {
    dispatch({ type: "TOGGLE PAGE", payload: id });
  };

  return (
    <>
      <Search query={query} onHandleChange={onHandleChange} />
      <div className="Toggle__div">
        <button className="Toggle__btn" onClick={() => handlePages("PREV")}>
          prev
        </button>
        <span className="Pages">
          {page + 1} of {nbPages}{" "}
        </span>
        <button className="Toggle__btn" onClick={() => handlePages("NEXT")}>
          next
        </button>
      </div>
      <HackerNews hits={hits} filterBtn={filterBtn} />
    </>
  );
}

export default App;
