import { useEffect } from "react";
import Card from "./component/Card";
import Input from "./component/Input";
import Button from "./component/Button";
import { useWeather } from "./context/Weather";

import "./App.css";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
  
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;