import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeaturesTypeEighth"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./Features.module.css"

import { Email } from "../../../../components/Icons/Icons"

const Features = (props) => {
  return (
    <React.Fragment>
      <Row className={classes.featuresRow}>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={100} triggerOnce={true}>
            <Feature
              title={"Go Paperless"}
              description={"No more physical copy of certificate"}
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={150} triggerOnce={true}>
            <Feature
              title={"Systematic & Traceable"}
              description={
                "Record and organize entire participant’s certificates in one database for at least 3-5 years. Ensure the certificate is originally isued by IEM"
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
        <Col lg="4" md="6" sm="6" className={classes.item}>
          <Fade top delay={200} triggerOnce={true}>
            <Feature
              title={"Easy & Fast"}
              description={
                "Bulk import and export features that reduces secretary time to generate certificate individually."
              }
            >
              <Oval variant={"large"}>
                <Email />
              </Oval>
            </Feature>
          </Fade>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Features
