import React from "react"; // we need this to make JSX compile
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export const Header: React.FunctionComponent = () => {
  //hooks

  //effects

  //element render
  return (
    <div className="App-header">
      <Container fluid>
        <Row>
          <Col>
            <Link to="/" className="App-Link">
              <div>Ivan Yohuno - Full Stack Developer</div>
            </Link>
          </Col>
          <Col>
            <Link to="/skills" className="App-Link">
              <div>Skills</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
