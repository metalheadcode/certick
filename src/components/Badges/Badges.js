import React, { Component } from "react"
import "./Badges.css"
import { AppStore, PlayMarket } from "../Icons/Icons"

class Badge extends Component {
  render() {
    const isAppStore = this.props.store
    const bgColor = this.props.bgColor || "#345dee"
    const radius = this.props.radius || "8"
    const fontColor = this.props.fontColor

    return (
      <React.Fragment>
        {isAppStore ? (
          <a
            href={this.props.link}
            target={this.props.target}
            rel="noreferrer"
            className={`Badge-link ${this.props.classes}`}
            style={{
              backgroundColor: `${bgColor}`,
              color: `${fontColor} !important`,
              borderRadius: `${radius}px`,
            }}
          >
            <span className="left">
              <AppStore fill="#ffffff" />
            </span>
            <span className="right">
              <p>Download on the</p>
              <strong className="Badge-strong">App Store</strong>
            </span>
          </a>
        ) : (
          <a
            href={this.props.link}
            target={this.props.target}
            rel="noreferrer"
            className={`Badge-link ${this.props.classes}`}
            style={{
              backgroundColor: `${bgColor}`,
              color: `${fontColor}`,
              borderRadius: `${radius}px`,
            }}
          >
            <span className="left">
              <PlayMarket fill="#ffffff" />
            </span>
            <span className="right">
              <p>Get it on</p>
              <strong className="Badge-strong">Google Play</strong>
            </span>
          </a>
        )}
      </React.Fragment>
    )
  }
}

export default Badge
