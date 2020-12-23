import React, { useState } from "react";
import { useFetch } from "../utils/FetchHook";
import List from "./components/List";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import { Icon } from "semantic-ui-react";

const URL = "https://www.breakingbadapi.com/api/characters";

export default function HomePage() {
  const { status, data, error } = useFetch(URL);
  const [filteredData, setFilteredData] = useState(null);

  const filterData = (query) => {
    if (query) {
      setFilteredData(
        data.filter((char) =>
          char.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredData(null);
    }
  };

  return (
    <div className="main">
      <Header filterData={filterData} />
      <ErrorMessage error={error} />
      <List data={filteredData ? filteredData : data} />
      <footer className="footer"></footer>
    </div>
  );
}
