import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dayli from "./Components/Dayli/Dayli";
import Today from "./Components/Today/Today";
import Layout from "./Components/Layout/Layout";
import Input from "./Components/Inputs/Input";
import "./App.scss";
import Hourly from "./Components/Hourly/Hourly";
export const apiKey = "92fe8ed71d6c96ecf7fa577cadb248f5";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [fullWeather, setFullWeather] = useState({});

  useEffect(() => {
    city &&
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => setWeather(res));
  }, [city]);

  useEffect(() => {
    weather.name &&
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((res) => setFullWeather(res));
  }, [weather]);

  return (
    <BrowserRouter>
      <Input setCity={setCity} />
      <Routes>
        <Route path="/" element={city && <Layout />}>
          <Route
            index
            element={weather.name && <Today data={weather} />}
          ></Route>
          <Route
            path="/dayli"
            element={fullWeather.daily && <Dayli data={fullWeather.daily} />}
          />
          <Route
            path="/hourly"
            element={fullWeather.hourly && <Hourly data={fullWeather.hourly} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
