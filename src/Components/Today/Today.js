import React, { useState } from "react";
import Moment from "react-moment";
import "./style.scss";

function Today({ data }) {
  const [weather] = useState({
    name: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp) + "\u00b0C",
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    dateTime: data.dt,
  });

  return (
    <>
      {weather.name && (
        <div className="current-weather">
          <Moment className="date-time" unix format="DD. MMM. Y">
            {weather.dateTime}
          </Moment>
          <h2>
            {weather.name}, {weather.country}
          </h2>
          <div>
            <img src={weather.icon} alt="" />
            <h3>{weather.temp}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Today;
