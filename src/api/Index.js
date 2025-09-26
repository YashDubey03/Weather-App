   const baseURL =
  "https://api";
  const apikey = "apikey";

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


