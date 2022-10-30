export interface IWeather {
  name: string;
  description: string;
  currentTemp: number;
  feelsLike: number;
  windSpeed: number;
  isValid: boolean;
}
