import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const SecondsFormatting = () => {
    const [second, setSecond] = useState(0)
    const [result, setResult] = useState(0)


  const getSeconds = (e) => {
    console.log(e.target.value);
    setSecond(e.target.value)
  };

  const formatSeconds = () => {
    const date = new Date(null)
    date.setSeconds(second)
    setResult(date.toISOString().slice(11, 19))
    console.log(result);
  }

  return (
    <div className="flex-center">
      <div className="header">
        <h1>3. Seconds formatting</h1>
      </div>
      <div className="user-radius-input">
        <input
          className=""
          placeholder="Enter seconds"
          onChange={getSeconds}
        ></input>
      </div>

      <div className="result-button">
        <button onClick={formatSeconds}>Calculate</button>
      </div>

      <div className="temp-result">
        <p>=</p>
        <div>{isNaN(second) ? "enter number only u fuckhead" : `${result}`}</div>
      </div>
    </div>
  );
};

export default SecondsFormatting;
