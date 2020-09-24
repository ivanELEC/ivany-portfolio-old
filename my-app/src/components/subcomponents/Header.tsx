import React from "react"; // we need this to make JSX compile
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Header: React.FunctionComponent = () => {
  //hooks

  //effects

  //element render
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Link to="/">
              <div>Ivan Yohuno - Full Stack Developer</div>
            </Link>
          </Col>
          <Col>
            <Link to="/skills">
              <Button variant="dark">Skills</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
