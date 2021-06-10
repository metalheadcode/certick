import React from "react"
import { Row, Col } from "reactstrap"
import classes from "./FeaturesTypeEighth.module.css"

const FeaturesTypeEighth = (props) => {
  return (
    <div className={classes.feature}>
      <Row className={classes.topLevel}>
        <Col className={classes.col}>{props.children}</Col>
      </Row>
      <Row className={classes.bottomLevel}>
        <Col className={classes.col}>
          <h3 className={`title ${classes.title}`}>{props.title}</h3>
          <p className={`normal-text ${classes.description}`}>
            {props.description}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default FeaturesTypeEighth
