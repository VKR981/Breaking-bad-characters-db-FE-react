import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../utils/FetchHook";
import ListItem from "./components/ListItem";
import ErrorMessage from "./components/ErrorMessage";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const URL = "https://www.breakingbadapi.com/api/quote?author=";

export default function Character() {
  const { state } = useLocation();
  const { status, data, error } = useFetch(URL + state.name);

  return (
    <div style={{ margin: "5%" }}>
      <Link to="/" className="button">
        Back
      </Link>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <ErrorMessage error={error} />
        <img src={state.img} className="characterImg"></img>
        <div className="infoContainer">
          <ListItem _key="Name: " value={state.name} />
          <ListItem _key="DOB: " value={state.birthday} />
          <ListItem _key="Occupation: " value={state.occupation.join(", ")} />
          <ListItem _key="Status: " value={state.status} />
          <ListItem _key="Nickname: " value={state.nickname} />
          <ListItem _key="Played by: " value={state.portrayed} />
          <ListItem _key="Seasons: " value={state.appearance.join(", ")} />
          <ListItem _key="Quotes: " value={null} />
          <Quotes data={data} />
        </div>
      </div>
    </div>
  );
}

const Quotes = ({ data }) => (
  <div style={{ marginTop: "1rem" }}>
    {data.map((quote, index) => (
      <ListItem key={index} _key={`${index + 1}. `} value={quote.quote} />
    ))}
    {data.length == 0 ? <ListItem _key="No quotes found" value={""} /> : null}
  </div>
);
