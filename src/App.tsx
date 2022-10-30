import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import { getWeatherForCity } from "./utils/data";
import { IWeather } from "./interfaces/IWeather";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);

  const updateWeatherData = async (city: string) => {
    const newData = await getWeatherForCity(city);
    console.log(newData);
    let newWeatherData: IWeather = {
      name: "City not Found",
      description: "",
      currentTemp: 0,
      feelsLike: 0,
      windSpeed: 0,
      isValid: false,
    };
    if (newData.cod === 200) {
      newWeatherData = {
        name: newData.name,
        description: newData.weather[0].description,
        currentTemp: newData.main.temp,
        feelsLike: newData.main.feels_like,
        windSpeed: newData.wind.speed,
        isValid: true,
      };
    }
    setWeatherData(newWeatherData);
  };

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Form onSearch={updateWeatherData}></Form>
        <Result data={weatherData}></Result>
      </main>
    </div>
  );
}

export default App;
