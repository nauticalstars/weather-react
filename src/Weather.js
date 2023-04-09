import React, { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [WeatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      country: response.data.country,
      feels: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "89045e8b02ffo7bc061tb52f38ead08c";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(response) {
    response.preventDefault();
    search();
  }

  function CityChange(response) {
    setCity(response.target.value);
  }
  if (WeatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City name..."
                className="form-control"
                autoFocus="on"
                onChange={CityChange}
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
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    search();
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
