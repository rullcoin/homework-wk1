import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const ConcreteCalculator = () => {
    const [cement, setCement] = useState(0)
    const [sand, setSand] = useState(0)
    const [gravel, setGravel] = useState(0)
    const [result, setResult] = useState(0)

  const getCement = (e) => {
    setCement(e.target.value)
  };

  const getSand = (e) => {
    setSand(e.target.value)
  }

  const getGravel = (e) => {
    setGravel(e.target.value)
  }

  const getResult = () => {
    // (cement / 350 + sand / 680 + gravel / 1175) / 3
    setResult(Math.round(((cement / 350 + sand / 680 + gravel / 1175) / 3) * 100) / 100)
  }

  return (
    <div>
      <div className="concrete-container flex-center">
        <div className="header">
          <h1>4. Concrete calculator </h1>
        </div>
        <div className="user-cement-input">
          <input
            className=""
            placeholder="Enter cement in KG"
            onChange={getCement}
          ></input>
        </div>

        <div className="user-sand-input">
          <input
            className=""
            placeholder="Enter sand in KG"
            onChange={getSand}
          ></input>
        </div>

        <div className="user-gravel-input">
          <input
            className=""
            placeholder="Enter gravel in KG"
            onChange={getGravel}
          ></input>
        </div>

      <div className="result-button">
        <button onClick={getResult}>Calculate</button>
      </div>

      <div className="temp-result">
        <p>=</p>
        <div>
          {isNaN(result) ? "enter number only u fuckhead" : `${result}m3`}
        </div>
      </div>

      </div>


    </div>
  );
};

export default ConcreteCalculator;
