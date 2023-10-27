import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Weathertemperature from "./Weathertemperature";
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
            <WeatherIcon code={props.data.icon} />
            <span className="float-left">
              <Weathertemperature celsius={props.data.temperature} />
              {Math.round(props.data.temperature)}
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
