import React from "react";
import "./button.css";

const Button = ({ icon, name, color, bgColor }) => {
  return (
    <a
      href=""
      className="mainBtn"
      style={{ color: color, background: bgColor }}
    >
      {icon} {name}
    </a>
  );
};

export default Button;
