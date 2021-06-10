import React from "react"
import { Col, Row } from "reactstrap"
import Feature from "../Feature/FeatureTypeFourth"
import { Bookmark, Email, Group } from "../../../../components/Icons/Icons"
import Oval from "../../../../components/Frame/Frame"
import { Fade } from "react-awesome-reveal"
import classes from "./Features.module.css"

const Features = ({ dark }) => {
  const features = [
    {
      id: 1,
      title: "Email Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et.",
      icon: <Email />,
    },
    {
      id: 2,
      title: "Team Accounts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et.",
      icon: <Group />,
    },
    {
      id: 3,
      title: "Property Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et.",
      icon: <Bookmark />,
    },
  ]

  return (
    <React.Fragment>
      <Row xs="1" className={classes.featuresRow}>
        {features.map((feature) => (
          <Col key={feature.id} className={classes.item}>
            <Fade down delay={100} triggerOnce={true}>
              <Feature title={feature.title} description={feature.description}>
                <Oval variant={"normal"}>{feature.icon}</Oval>
              </Feature>
            </Fade>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  )
}

export default Features
