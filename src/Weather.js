import React, { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [WeatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      feels: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      date: "Wednesday 07:00 pm",
    });
  }
  if (WeatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City name..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-danger w-100"
              />
            </div>
          </div>
        </form>
        <h1>{WeatherData.city}</h1>
        <ul>
          <li>{WeatherData.date}</li>
          <li className="text-capitalize">{WeatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={WeatherData.icon_url} alt={WeatherData.icon} />
            <span className="temperature">{WeatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {WeatherData.feels} °C</li>
              <li>Humidity: {WeatherData.humidity} %</li>
              <li>Wind: {WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "89045e8b02ffo7bc061tb52f38ead08c";
    let city = "Vancouver";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#ff0000"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }
}
