import { useState, useEffect } from "react";
import "./App.scss";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("London");

  const apiKey = "92fe8ed71d6c96ecf7fa577cadb248f5";

  useEffect(() => {
    console.log("Render data");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      // `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=92fe8ed71d6c96ecf7fa577cadb248f5&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setWeather(res));
  }, [city]);

  return (
    <div className="container">
      <div className="input-holder">
        <input type="text" onInput={(e) => setCity(e.target.value)} />
        <button>Find</button>
      </div>
      {weather.name && <CurrentWeather data={weather} />}
    </div>
  );
}

export default App;
