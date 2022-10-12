import React from "react";

import "./Button.css";

const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
