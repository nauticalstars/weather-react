import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" className="text-decoration-none" onClick={convertToF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" className="text-decoration-none" onClick={convertToC}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
