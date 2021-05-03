import React from "react"
import {
  DanaFresh,
  EmmaLogo,
  FlinkenLogo,
  GoTani,
  NeuonLogo,
  WormingUp,
} from "../../../../components/Icons/Icons"

import classes from "./Logos.module.css"

const Logos = (props) => {
  return (
    <section className={classes.logos}>
      <div className={`row ${classes.row}`}>
        <div className={`col-auto ${classes.col}`}>
          <WormingUp />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <EmmaLogo />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <GoTani />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <DanaFresh />
        </div>

        <div className={`col-auto ${classes.col}`}>
          <FlinkenLogo />
        </div>
        <div className={`col-auto ${classes.col}`}>
          <NeuonLogo />
        </div>
      </div>
    </section>
  )
}

export default Logos
