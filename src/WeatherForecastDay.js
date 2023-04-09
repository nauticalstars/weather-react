import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    const options = {
      weekday: "short",
    };
    let date = new Date(props.data.time * 1000);
    let day = date.toLocaleDateString([], options);

    return day;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <WeatherIcon code={props.data.condition.icon} size={36} />{" "}
      <div className="WeatherForecast-temp">
        {" "}
        <span className="WeatherForecast-high"> {maxTemperature()}</span>{" "}
        <span className="WeatherForecast-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
