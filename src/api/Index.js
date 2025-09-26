   const baseURL =
  "https://api.openweathermap.org/data/2.5/weather";
  const apikey = "08506024fda1c0d6ffb6a0dfc97d9ac6";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}?q=${city}&appid=${apikey}&units=metric`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(
    `${baseURL}?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
  );
  return await response.json();
};

// 08506024fda1c0d6ffb6a0dfc97d9ac6

//https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=08506024fda1c0d6ffb6a0dfc97d9ac6&units=metric
