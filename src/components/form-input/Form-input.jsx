import React from "react";
import "./Form-input.scss";

const FormInput = ({ handleChange, name, label, type, value }) => {
  return (
    <div className="group">
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={`${
            value && value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
