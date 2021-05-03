import React from "react"

import { Container, Col, Row } from "reactstrap"
import Button from "../../../components/Button/Button"
import image from "../../../img/Macbook.png"
import { Fade } from "react-awesome-reveal"
import classes from "./FeaturesLayoutsTypeFourteen.module.css"

const title = "Imagine All Your Certificate In One Place!"
const description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odit repudiandae necessitatibus suscipit iure rem dolorum adipisci non  minima at?"

function FeaturesLayoutsTypeFourteen(props) {
  return (
    <React.Fragment>
      <section
        className={`section ${classes.features} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
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
                  <img src={image} alt="" style={{ position: "relative" }} />
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "darkgrey",
                      width: "74.4%",
                      height: "76.95%",

                      top: "14%",
                      left: "12.78%",
                    }}
                  >
                    <h1
                      style={{
                        position: "relative",
                        textAlign: "center",
                        top: "40%",
                      }}
                    >
                      the video will appear here
                    </h1>
                  </div>
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
  )
}
export default FeaturesLayoutsTypeFourteen
