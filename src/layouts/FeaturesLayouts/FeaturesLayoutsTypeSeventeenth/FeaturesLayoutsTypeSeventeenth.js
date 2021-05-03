import { Row, Col, Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

import React, { Component } from "react"
import "antd/dist/antd.css"

import { Email, Group } from "../../../components/Icons/Icons"
import Oval from "../../../components/Frame/Frame"
import Feature from "./Feature/FeatureTypeFourth"
import Slider from "./Slider/Slider"
import Button from "../../../components/Button/Button"
import { Fade } from "react-awesome-reveal"
import classes from "./FeaturesLayoutsTypeSeventeenth.module.css"

const title = "Certick Key Features"
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"

class FeaturesLayoutsTypeSeventeenth extends Component {
  state = {
    features: [
      {
        title: "Flexible",
        description:
          "Allow IEM to upload the template of their  cetificate for different programes",
        icon: <Email fill="#ffffff" />,
      },
      {
        title: "Bulk",
        description:
          "Able import member’s information in bulk and generate certificate automatically.",
        icon: <Group fill="#ffffff" />,
      },
      {
        title: "Retrieve & Search",
        description:
          "Able to manage (retrieve and search) participant’s certificates.",
        icon: <Email fill="#ffffff" />,
      },
      {
        title: "Participants Recorder",
        description: "Manage/record participant’s attendance on the events.",
        icon: <Email fill="#ffffff" />,
      },
      {
        title: "Send In Bulk",
        description: "Send e-certificates to participants in bulk via email.",
        icon: <Group fill="#ffffff" />,
      },
      {
        title: "WCB Connected To Web",
        description: "WCS shall be connected to IEM Sarawak website",
        icon: <Email fill="#ffffff" />,
      },
    ],
  }

  renderCards() {
    const card = this.state.features
    const listItems = card.map((item, index) => {
      return (
        <Feature
          key={index}
          title={item.title}
          description={item.description}
          dark={this.props.dark ? true : false}
        >
          <Oval variant={"large"} color={"secondary"}>
            {item.icon}
          </Oval>
        </Feature>
      )
    })
    return <Slider array={listItems} dark={this.props.dark ? true : false} />
  }

  render() {
    return (
      <div>
        <section
          className={`section ${classes.features} ${
            this.props.dark ? `dark ${classes.dark}` : ""
          }`}
        >
          <Container className={classes.container}>
            <Row className={classes.headerRow}>
              <Col
                lg="10"
                md="10"
                className={`mx-auto text-center ${classes.col}`}
              >
                <div className={classes.gridWrapper}>
                  <Fade down>
                    <h1 className={`title ${classes.title}`}>{title}</h1>
                  </Fade>
                  <Fade down delay={50} triggerOnce={true}>
                    <p className={`description ${classes.description}`}>
                      {description}
                    </p>
                  </Fade>
                </div>
              </Col>
            </Row>
            <Row className={classes.featuresRow}>
              <Col className="p-0">
                <Fade down delay={100} triggerOnce={true}>
                  {this.renderCards()}
                </Fade>
              </Col>
            </Row>
            <Row className={classes.buttonsRow}>
              <Col
                lg="10"
                md="10"
                className="mx-auto d-flex justify-content-center"
              >
                <Fade down delay={150} triggerOnce={true}>
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
        </section>
      </div>
    )
  }
}

export default FeaturesLayoutsTypeSeventeenth
