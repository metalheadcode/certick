import React from "react"
import "./Frame.css"

const Frame = ({ shape, color, variant, size, children }) => {
  return (
    <div
      className={`Frame ${shape} ${color} ${variant}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}px`,
      }}
    >
      {children}
    </div>
  )
}

export default Frame
