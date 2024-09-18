import React, { useEffect } from "react";
import { Search } from "../search";
import { useState } from "react";

export const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  async function checkWeatherStats(param) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f57bab2a84d709aa05e477c765f3a6cd`
      );
      const result = await response.json();
      setWeather(result);
      setLoading(false);
      console.log("", result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkWeatherStats(search);
    setSearch("");
  };

  useEffect(() => {
    checkWeatherStats("bannu");
  }, []);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="weather-container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <h1>Please Wait!</h1>
      ) : (
        <>
          <div>
            <h1>
              {weather?.name}
              <span>{weather?.sys?.country}</span>
            </h1>
          </div>
          <div className="date">
            <p>{formattedDate}</p>
          </div>
          <div className="weather-data">
            <h3>{weather?.main?.temp}</h3>
            <h3>Weather: {weather?.weather?.[0].main}</h3>
            <h3>Description: {weather?.weather?.[0].description}</h3>
          </div>
          <div className="misc">
            <p>wind speed: {weather?.wind?.speed}</p>
            <p>Humidity: {weather?.main?.humidity}</p>
          </div>
        </>
      )}
    </div>
  );
};
