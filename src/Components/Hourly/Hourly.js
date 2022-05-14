import React from "react";
import WeatherHour from "./WeatherHour";
import "./style.scss";

function Hourly({ data }) {
  const weather = data.map((hour, index) => {
    return <WeatherHour hour={hour} key={index} />;
  });

  return <ul className="hourly">{weather}</ul>;
}

export default Hourly;
