const getWeatherForCity = async (city: string) => {
  return {
    coord: { lon: -84.388, lat: 33.749 },
    weather: [
      { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
    ],
    base: "stations",
    main: {
      temp: 291.12,
      feels_like: 290.96,
      temp_min: 289.69,
      temp_max: 292.45,
      pressure: 1023,
      humidity: 76,
    },
    visibility: 10000,
    wind: { speed: 0.89, deg: 45, gust: 2.24 },
    clouds: { all: 100 },
    dt: 1667076889,
    sys: {
      type: 2,
      id: 2006620,
      country: "US",
      sunrise: 1667044437,
      sunset: 1667083703,
    },
    timezone: -14400,
    id: 4180439,
    name: "Atlanta",
    cod: 200,
  };

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6e467f891d8a0979e2f70e90ad2771f`;
  // console.log(url);
  // const response = await window.fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/json;charset=UTF-8",
  //   },
  // });

  // const { data } = await response.json();
  // if (response.ok) {
  //   return data;
  // } else {
  //   return {};
  // }
};

export { getWeatherForCity };
