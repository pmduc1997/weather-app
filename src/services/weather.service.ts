import axios from "axios";
import { Weather } from "./weather.type";

export const getWeather = (city: string) => {
  return axios.get<Weather>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
  );
};
