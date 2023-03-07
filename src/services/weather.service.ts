import axios from "axios";
import { City, Forecast, Weather } from "./weather.type";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "c8a9983b46961181c65cbd78a9ba7d3d";

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const getCities = (city: string) => {
  return axios.get<{ data: City[] }>(
    `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${city}`,
    GEO_API_OPTIONS
  );
};

export const getWeather = (lat: number, lon: number) => {
  return axios.get<Weather>(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
};

export const getForecast = (lat: number, lon: number) => {
  return axios.get<Forecast>(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
};
