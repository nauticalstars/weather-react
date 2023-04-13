import React from "react";

export default function UnitConversion(props) {
  return (
    <div className="UnitConversion">
      <span className="temperature">{props.celsius}</span>
      <span className="unit"> °C </span>
    </div>
  );
}
