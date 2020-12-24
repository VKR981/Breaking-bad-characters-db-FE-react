import { useEffect, useRef, useReducer } from "react";

export const useFetch = (url) => {
  let cache = localStorage.getItem("dataCache");
  if (cache) {
    cache = JSON.parse(cache);
  } else {
    cache = {};
  }

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache[url]) {
        const data = cache[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache[url] = data;
          localStorage.setItem("dataCache", JSON.stringify(cache));
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
