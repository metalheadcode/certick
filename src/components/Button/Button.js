import React, { Component } from "react"
import "./Button.css"

// the button received two kind of parameter, a or button tag...
// if you provide a link button will automatically using this props
// a:
// link
// href
// classes
// size
// onClick
// leftIcon
// rightIcon
// value

// button:
// classes
// size
// type
// onClick
// radius
// leftIcon
// value
// rightIcon

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.link === true ? (
          <a
            target={this.props.target}
            rel="noreferrer"
            href={this.props.href}
            className={`Button ${this.props.classes} ${this.props.size}`}
            onClick={this.props.onClick}
            style={{ borderRadius: `${this.props.radius}` }}
          >
            {this.props.leftIcon}
            <span>{this.props.value}</span>
            {this.props.rightIcon}
          </a>
        ) : (
          <button
            className={`Button ${this.props.classes} ${this.props.size}`}
            type={this.props.type}
            onClick={this.props.onClick}
            style={{ borderRadius: `${this.props.radius}` }}
          >
            {this.props.leftIcon}
            <span>{this.props.value}</span>
            {this.props.rightIcon}
          </button>
        )}
      </React.Fragment>
    )
  }
}

export default Button
