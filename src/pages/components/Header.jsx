import React from "react";
import { Icon } from "semantic-ui-react";

export default function Header({ filterData }) {
  return (
    <div className="header">
      <header className="headerText">Breaking Bad Charaters</header>
      <search className="searchBox">
        <Icon name="search" className="icon" />
        <input onChange={(e) => filterData(e.target.value)}></input>
      </search>
    </div>
  );
}
