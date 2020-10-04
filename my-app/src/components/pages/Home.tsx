import React from "react"; // we need this to make JSX compile
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { PopCard } from "../subcomponents/PopCard";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

export const Home: React.FunctionComponent = () => {
  //constants
  const styles = {
    fadeInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
  };

  //hooks

  //effects

  //element render
  return (
    <StyleRoot>
      <div>
        <Container fluid style={styles.fadeInLeft}>
          <Row>
            <Col className="Card-Spacing">
              <PopCard title="Profile">
                <p>
                  I have a background in Front-End development of interactive,
                  responsive websites and also Back-End API service building
                </p>

                <p>
                  Development for me is about creating something maintainable,
                  sustainable and accessible in the interest of usability and
                  collaboration
                </p>

                <p>
                  I co-designed and developed{" "}
                  <a href="https://www.chromamixes.com">chromamixes.com</a>
                </p>

                <p>
                  I am currently working as an Associate IT Developer at
                  Novacept building Node.js and React.js based products such as
                  web chat bots that interact with Azure services{" "}
                </p>
              </PopCard>
            </Col>
            <Col>
              <Image src="../../../../images/ProfileImage.png" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </StyleRoot>
  );
};
