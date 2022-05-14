import React from "react";
import WeatherDay from "./WeatherDay";
import "./style.scss";

function Dayli({ data }) {
  const weather = data.map((day, index) => {
    return <WeatherDay day={day} key={index} />;
  });

  return <ul className="dayli">{weather}</ul>;
}

export default Dayli;
