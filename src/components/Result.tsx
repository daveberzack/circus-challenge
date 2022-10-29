import React from "react";
import { IWeather } from "../interfaces/IWeather";

interface IProps {
  data: IWeather | null;
}

const Result: React.FC<IProps> = ({ data }) => {
  if (data) {
    return (
      <article>
        <h2>{data.name}</h2>
        <ul>
          <li>Description: {data.description}</li>
          <li>Current temp: {data.currentTemp}°F</li>
          <li>Feels like: {data.feelsLike}°F</li>
          <li>Wind speed: {data.windSpeed}mph</li>
        </ul>
      </article>
    );
  } else {
    return (
      <article>
        <h2>No City</h2>
      </article>
    );
  }
};

export default Result;
