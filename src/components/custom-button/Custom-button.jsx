import React from "react";
import "./Custom-button.scss";

const CustomButton = ({
  children,
  type,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
