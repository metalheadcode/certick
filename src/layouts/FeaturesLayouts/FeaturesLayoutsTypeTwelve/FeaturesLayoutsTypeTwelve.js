import React, { useState } from "react"
import { Col, Container, Row } from "reactstrap"

import VerticalModal from "./VerticalModal/VerticalModal"
import Feature from "./Feature/FeatureTypeFourth"
import Oval from "../../../components/Frame/Frame"
import { Email, Group } from "../../../components/Icons/Icons"
import FeatureCard from "./FeatureCard/FeaturesTypeTwelve"
import { Fade } from "react-awesome-reveal"
import classes from "./FeaturesLayoutsTypeTwelve.module.css"
import BgVideo from "../../../video/pexels-tea-oebel-6651197.webm"

function FeaturesLayoutsTypeTwelve(props) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <React.Fragment>
      <section
        className={`section ${classes.features} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
        style={{ position: "relative" }}
      >
        <video
          title="bussiness-farmer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
        >
          <source src={BgVideo}></source>
        </video>
        <Container
          fluid={true}
          className={`container-fluid ${classes.containerFluid}`}
        >
          <div className={classes.gridWrapper}>
            <Container>
              <Row>
                <Col lg="6" md="7">
                  <Fade triggerOnce={true}>
                    <FeatureCard
                      title={"Benefit For Participants"}
                      description={
                        "We not only focus on IEM benefits, but also we manage to give the best to the participants."
                      }
                      dark={props.dark ? true : false}
                    >
                      <Feature
                        title={"Search Certificate"}
                        description={
                          "Search participant’s certificate via user portal."
                        }
                        dark={props.dark ? true : false}
                      >
                        <Oval variant={"normal"}>
                          <Email />
                        </Oval>
                      </Feature>

                      <Feature
                        title={"Printout Your Cert!"}
                        description={
                          "Able to printout your certificate directly from out platform"
                        }
                        dark={props.dark ? true : false}
                      >
                        <Oval variant={"normal"}>
                          <Group />
                        </Oval>
                      </Feature>
                    </FeatureCard>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <VerticalModal
          dark={props.dark ? true : false}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeTwelve
