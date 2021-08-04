import React from "react";
import classes from "./CTALayoutsTypeTwelve.module.css";

import Button from "../../../components/Button/Button";
import Logos from "./Logos/Logos";
import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const description =
  "We feel so grateful with customer trust, and one them now is our shareholder.";
function CTALayoutsTypeTwelve(props) {
  return (
    <React.Fragment>
      <section
        className={`section ${classes.cta} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row className={classes.logosRow}>
              <Col lg={10} md={10} className="mx-auto">
                <Fade top triggerOnce={true}>
                  <Logos dark={props.dark ? true : false} />
                </Fade>
              </Col>
            </Row>
            <Row className={classes.textRow}>
              <Col lg={10} md={10} className="mx-auto">
                <Fade top delay={50} triggerOnce={true}>
                  <p
                    className={`normal-text text-center ${classes.description}`}
                  >
                    {description}
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className={classes.buttonsRow}>
              <Col
                lg={10}
                md={10}
                className="mx-auto d-flex justify-content-center"
              >
                <Fade top delay={100} triggerOnce={true}>
                  <Button
                    link={true}
                    target={"_blank"}
                    href={
                      "https://wa.me/60146884403?text=I'm%20interested%20to%20talk%20more%20about%20Certick."
                    }
                    type={"submit"}
                    classes={"primary large simple w-100"}
                    value={"Whatsapp"}
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
export default CTALayoutsTypeTwelve;
