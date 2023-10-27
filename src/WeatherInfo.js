import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="float-left"
              alt="cloudy"
            />
            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>humidity:{props.data.humidity}</li>
            <li>Wind:{props.data.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
