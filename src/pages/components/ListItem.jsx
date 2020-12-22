import React from "react";

export default function ListItem({ _key, value }) {
  return (
    <div className="listItemChild">
      <div className="key">{`${_key}` + " "}</div>
      <span>{"\u00A0"}</span>
      <span>{"\u00A0"}</span>
      <div className="value">{value}</div>
    </div>
  );
}
