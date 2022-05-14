import React from "react";
import Moment from "react-moment";

function WeatherHour({ hour }) {
  const icon = hour.weather[0].icon;
  const temp = Math.round(hour.temp);

  return (
    <li>
      <span>
        <Moment unix format="HH:mm">
          {hour.dt}
        </Moment>
      </span>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>{temp}&deg;C</span>
    </li>
  );
}

export default WeatherHour;
