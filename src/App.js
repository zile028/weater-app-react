import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);

  const apiKey = "92fe8ed71d6c96ecf7fa577cadb248f5";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.88&lon=20.86&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setCurrentWeather(res));
  }, []);

  return (
    <div>
      <h1>
        {currentWeather.name}, {currentWeather.sys.country}
      </h1>
      <p>Temperature: {currentWeather.main.temp}&deg;C</p>
    </div>
  );
}

export default App;
