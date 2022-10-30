const getWeatherForCity = (city: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6e467f891d8a0979e2f70e90ad2771f`;

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export { getWeatherForCity };
