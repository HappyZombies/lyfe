import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, to, disabled }) => {
  return (
    <Link to={to}>
      <button type="button" disabled={disabled}>
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
