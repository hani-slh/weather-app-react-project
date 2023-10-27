import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState();

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      describe: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }
  function search() {
    const apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&callback=test&appid=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="weather border #dadde1 rounded">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
