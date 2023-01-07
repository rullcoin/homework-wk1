import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const CylinderCalc = (props) => {
  const [radius, setRadius] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0)

  const getRadius = (e) => {
    console.log(e.target.value);
    setRadius(e.target.value);
  };

  const getHeight = (e) => {
    console.log(e.target.value);
    setHeight(e.target.value)
  };

  const volumeCalculation = () => {
    let result = Math.PI * (Math.pow(radius, 2) * height) 
    console.log(result);
    setResult(Math.round(result * 100) / 100)
  }

  return (
    <div className="cylinder-calculator flex-center">
      <div className="header">
        <h1>
            2. Cylinder volume calculator
        </h1>
      </div>
      <div className="user-radius-input">
        <input
          className=""
          placeholder="Enter radius"
          onChange={getRadius}
        ></input>
      </div>

      <div className="user-radius-input">
        <input
          className=""
          placeholder="Enter height"
          onChange={getHeight}
        ></input>
      </div>

      <div className="result-button">
        <button onClick={volumeCalculation}>Calculate</button>
      </div>

      <div className="temp-result">
        <div>
          {isNaN(result) ? "enter numbers only u fuckhead" : `Volume of your cylinder: ${result}`}
        </div>
      </div>

    </div>
  );
};

export default CylinderCalc;
