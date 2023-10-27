import React from "react";
export default function FormattedDate(props) {
  let days = [
    "Sundays",
    "Mondays",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friay",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day} {hours}:{minute}
    </div>
  );
}
