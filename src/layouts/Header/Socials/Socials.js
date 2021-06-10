import React from "react"
import { LinkedIn, Twitter, Google } from "../../../components/Icons/Icons.js"
import SocialsLinks from "../Socials/Socials.js"
import Oval from "../../../components/Frame/Frame.js"
import { Link } from "react-router-dom"

const Socials = (props) => {
  return (
    <div className="socials">
      <p>Follow us</p>
      <SocialsLinks>
        <Link to="#">
          <Oval variant="normal">
            <Twitter />
          </Oval>
        </Link>
        <Link to="#">
          <Oval variant="normal">
            <LinkedIn />
          </Oval>
        </Link>
        <Link to="#">
          <Oval variant="normal">
            <Google />
          </Oval>
        </Link>
      </SocialsLinks>
    </div>
  )
}

export default Socials
