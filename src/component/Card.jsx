import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
      {weather.data && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
            alt={weather.data.weather[0].description}
          />
          <h2>{weather.data.main.temp} °C</h2>
          <h5>
            {weather.data.name}, {weather.data.sys.country}
          </h5>
        </>
      )}
    </div>
  );
};

export default Card;
