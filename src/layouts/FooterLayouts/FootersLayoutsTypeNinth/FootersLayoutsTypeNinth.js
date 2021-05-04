import React from "react"
import { Container, Col, Row } from "reactstrap"
import { Nav, Navbar } from "react-bootstrap"
import Badge from "../../../components/Badges/Badges"
import classes from "./FootersLayoutsTypeNinth.module.css"
import { Fade } from "react-awesome-reveal"

function FootersLayoutsTypeNinth(props) {
  return (
    <React.Fragment>
      <section
        className={`section  ${classes.footer} ${
          props.dark ? `dark ${classes.dark}` : ""
        }`}
      >
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col className={`col-auto d-flex ${classes.leftColumn}`}>
                <Navbar expand="lg" className={`p-0 ${classes.navbar}`}>
                  <Nav className={`ml-auto ${classes.navbarNav}`}>
                    <Fade top triggerOnce={true}>
                      <Nav.Link
                        target="_blank"
                        href="https://neuon.ai"
                        className={classes.navLink}
                      >
                        Powered By NEUON AI SDN BHD
                      </Nav.Link>
                    </Fade>
                  </Nav>
                </Navbar>
              </Col>
              <Col className={`col-auto ml-auto ${classes.rightColumn}`}>
                <Fade top delay={50} triggerOnce={true}>
                  <div className={classes.mangkuk}>
                    <Badge
                      store={false}
                      link="https://play.google.com/store/apps/details?id=ai.neuon.gopasar"
                    />
                    <Badge
                      store={true}
                      bgColor={"black"}
                      color={"black"}
                      link="/ios"
                    />
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FootersLayoutsTypeNinth
