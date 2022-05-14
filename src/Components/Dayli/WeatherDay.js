import React from "react";
import Moment from "react-moment";

function WeatherDay({ day }) {
  const icon = day.weather[0].icon;
  const tempMin = Math.round(day.temp.min);
  const tempMax = Math.round(day.temp.max);

  return (
    <li>
      <span>
        <Moment unix format="ddd, DD. MMM.">
          {day.dt}
        </Moment>
      </span>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <span>
        {tempMin}/{tempMax}&deg;C
      </span>
    </li>
  );
}

export default WeatherDay;
