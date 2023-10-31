import React from "react";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

export default (props) => {
  return (
    <Container>
      <Header></Header>
      {props.children}
      <h1>This is footer</h1>
    </Container>
  );
};
