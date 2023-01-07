import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Tempconversion = (props) => {
  const [value, setValue] = useState(0);

  const getValue = (e) => {
    console.log(e.target.value);
    conversion(e.target.value);
  };

  const conversion = (temp) => {
    let tempToF = (temp * 9) / 5 + 32;
    setValue(tempToF);
  };

  return (
    <div className="temp-container flex-center">
      <div className="header">
        <h1>1. Celcius to Fahrenheit conversion </h1>
      </div>
      <div className="user-temp-input">
        <input
          className=""
          placeholder="Enter Celcius temperature"
          onChange={getValue}
        ></input>
      </div>

      <div className="temp-result">
        <p>=</p>
        <div>
          {isNaN(value) ? "enter number only u fuckhead" : `${value} °F`}
        </div>
      </div>
    </div>
  );
};

export default Tempconversion;
