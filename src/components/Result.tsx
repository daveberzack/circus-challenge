import React from "react";
import { IWeather } from "../interfaces/IWeather";

interface IProps {
  data: IWeather | null;
}

const Result: React.FC<IProps> = ({ data }) => {
  if (data && data.isValid) {
    return (
      <article id="result">
        <h2>{data.name}</h2>
        <ul>
          <li>Description: {data.description}</li>
          <li>Current temp: {data.currentTemp}°F</li>
          <li>Feels like: {data.feelsLike}°F</li>
          <li>Wind speed: {data.windSpeed}mph</li>
        </ul>
      </article>
    );
  } else if (data) {
    return (
      <article id="result">
        <h2>City not Found</h2>
      </article>
    );
  } else {
    return (
      <article id="result">
        <h2>Enter a city</h2>
      </article>
    );
  }
};

export default Result;
