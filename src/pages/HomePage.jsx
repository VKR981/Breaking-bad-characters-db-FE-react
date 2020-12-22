import React from "react";
import { useFetch } from "../utils/FetchHook";
import List from "./components/List";
import ErrorMessage from "./components/ErrorMessage";

const URL = "https://www.breakingbadapi.com/api/characters";

export default function HomePage() {
  const { status, data, error } = useFetch(URL);

  return (
    <div className="main">
      <header className="header">Breaking Bad Charaters</header>
      <ErrorMessage error={error} />
      <List data={data} />
      <footer className="footer"></footer>
    </div>
  );
}
