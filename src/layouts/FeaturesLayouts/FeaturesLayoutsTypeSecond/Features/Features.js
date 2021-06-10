import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import { Fade } from "react-awesome-reveal"

import style from "./Features.module.css"
import Oval from "../../../../components/Frame/Frame.js"
import { Admin, Approve, Certified } from "../../../../components/Icons/Icons"

const Features = ({ dark }) => {
  const featureItems = [
    { id: 1, text: "Certificates Management", icon: <Admin /> },
    { id: 2, text: "Legit Approval", icon: <Certified /> },
    { id: 3, text: "User Administration", icon: <Approve /> },
  ]
  return (
    // section ni yang bagi value top-padding 100px
    <section className={`${style.feature} ${dark ? `dark ${style.dark}` : ""}`}>
      <ListGroup className={style.listGroup}>
        {featureItems.map((feature) => (
          <ListGroup.Item key={feature.id} className={style.item}>
            <Fade top delay={100} triggerOnce={true}>
              <Oval variant={"large"}>{feature.icon}</Oval>
              <p>{feature.text}</p>
            </Fade>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  )
}

export default Features
