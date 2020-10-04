import React from "react"; // we need this to make JSX compile
import Cards from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Prop Types
type CardProps = {
  title: string;
};
export const PopCard: React.FunctionComponent<CardProps> = (props) => {
  //hooks

  //effects

  //element render

  return (
    <div>
      <Cards style={{ width: "100%" }}>
        <Cards.Body>
          <Cards.Title>{props.title}</Cards.Title>
          <Cards.Text>
            {props.children}
          </Cards.Text>
        </Cards.Body>
      </Cards>
    </div>
  );
};
