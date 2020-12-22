import React from "react";
import { Message, Icon } from "semantic-ui-react";

export default function ErrorMessage({ error }) {
  return (
    <div>
      {error && (
        <Message className="alertmessage" attached="bottom" warning>
          <Icon name="exclamation" />
          Error occured. Please try again
        </Message>
      )}
    </div>
  );
}
