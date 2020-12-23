import React, { useState } from "react";
import { List, Image, Pagination, Icon } from "semantic-ui-react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const PAGESIZE = 10;

export default function Render({ data }) {
  const [pageNo, setPageNo] = useState(1);

  const getSliceRange = () => {
    return {
      start: (pageNo - 1) * PAGESIZE,
      end: (pageNo - 1) * PAGESIZE + PAGESIZE,
    };
  };

  return (
    <div>
      <Pagination
        inverted
        activePage={pageNo}
        totalPages={Math.ceil(data.length / PAGESIZE)}
        onPageChange={(event, data) => setPageNo(data.activePage)}
        style={{ marginBottom: "2rem" }}
      />
      {data
        .slice(getSliceRange().start, getSliceRange().end)
        .map((char, index) => (
          <Link
            to={{
              pathname: "/character",
              state: char,
            }}
            key={index}
          >
            <div className="listItem">
              <List>
                <List.Item>
                  <Image size="small" src={char.img} />
                  <List.Content>
                    <ListItem _key="Name:" value={char.name} />
                    <ListItem
                      _key="Occupation:"
                      value={char.occupation.join(", ")}
                    />
                    <ListItem _key="DOB:" value={char.birthday} />
                    <ListItem _key="Status:" value={char.status} />
                  </List.Content>
                </List.Item>
              </List>
            </div>
          </Link>
        ))}
    </div>
  );
}
