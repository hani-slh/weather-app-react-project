import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
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
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="float-left"
            />
          </div>
          <div className="float-left">
            <span className="temperature">6</span>
          </div>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
