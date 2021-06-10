import React from "react";

import { Container, Col, Row } from "reactstrap";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeFourteen.module.css";
import IemVideo from "../../../video/iem-step-video.mp4";

const title = "Imagine All Your Certificate In One Place!";
const description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odit repudiandae necessitatibus suscipit iure rem dolorum adipisci non  minima at?";

function FeaturesLayoutsTypeFourteen(props) {
  return (
    <React.Fragment>
      <section
        className={`section ${classes.features} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
        id="how"
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row xs="1">
              <Col
                lg={6}
                md={6}
                className={`mx-auto text-center ${classes.firstLevel}`}
              >
                <Fade down triggerOnce={true}>
                  <h1 className={classes.title}>{title}</h1>
                </Fade>
              </Col>
              <Col className={classes.secondLevel}>
                <Fade up delay={50} triggerOnce={true}>
                  <video
                    title="bussiness-farmer"
                    style={{
                      zIndex: 10,
                      width: "100%",
                    }}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={IemVideo}></source>
                  </video>
                </Fade>
              </Col>
              <Col
                lg={8}
                md={8}
                className={`mx-auto text-center ${classes.thirdLevel}`}
              >
                <Fade up delay={100} triggerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {description}
                  </p>
                </Fade>
              </Col>
              <Col
                lg={8}
                md={8}
                className={`mx-auto text-center d-flex justify-content-center ${classes.fourthLevel}`}
              >
                <Fade up delay={150} triggerOnce={true}>
                  <Button
                    link={true}
                    href={"#"}
                    classes={`primary large simple ${classes.button}`}
                    value={"Get Started"}
                  />
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  );
}
export default FeaturesLayoutsTypeFourteen;
