import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <div>
      <input
        className="input-field"
        placeholder="Search here"
        value={weather.searchCity || ""}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
      <button onClick={weather.fetchData}>Search</button>
    </div>
  );
};

export default Input;
