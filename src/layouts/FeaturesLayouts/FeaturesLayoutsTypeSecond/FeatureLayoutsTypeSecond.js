import React from "react"
import classes from "./FeatureLayoutsTypeSecond.module.css"
import Feature from "./Features/Features"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"
import { Admin, Approve, Certified } from "../../../components/Icons/Icons"
import DashboardImage from "./../../../img/dashboard.webp"

const FeaturesLayoutsTypeSecond = ({ dark }) => {
  const title = "All Certificates In One Place."
  const description =
    "We are providing a Web-based Certification System (WCS) to IEM at the first place, but since we got requested by others NGO, now we are open to others!"
  const features = [
    { id: 1, text: "Certificates Management", icon: <Certified /> },
    { id: 2, text: "Legit Approval", icon: <Approve /> },
    { id: 3, text: "User Administration", icon: <Admin /> },
  ]
  return (
    <>
      <section
        className={`section ${classes.features} ${
          dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={`${classes.gridWrapper}`}>
          <Container>
            <Row>
              {/* left side of the page  */}
              <Col lg="6" md="7" className={classes.leftColumn}>
                <Fade top trigerOnce={true}>
                  <h1 className={`title ${classes.title}`}>{title}</h1>
                </Fade>
                <Fade top delay={50} trigerOnce={true}>
                  <p className={`normal-text ${classes.description}`}>
                    {description}
                  </p>
                </Fade>

                <Feature dark={dark ? true : false} features={features} />
              </Col>

              {/* right side of the page  */}
              <Col lg="6" md="5" className={classes.rightColumn}>
                <Fade delay={50} triggerOnce={true}>
                  <img src={DashboardImage} alt="" width="990" height="610" />
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default FeaturesLayoutsTypeSecond
