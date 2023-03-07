import { useQueries, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  getCities,
  getForecast,
  getWeather,
} from "../../services/weather.service";
import { useWeatherStore } from "./Weather.store";

const WEATHER_CACHE_KEY = {
  cities: "cities",
  weather: "weather",
  forecast: "forecast",
};

export const useGetCities = () => {
  const { city, setSelectedCity } = useWeatherStore();
  return useQuery([WEATHER_CACHE_KEY.cities, city], () => getCities(city), {
    retry: 0,
    enabled: !!city,
    onSuccess: (data) => {
      if (data.data.data.length === 0) return;
      setSelectedCity(data.data.data[0]);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useGetWeather = () => {
  const { selectedCity } = useWeatherStore();
  const { latitude, longitude } = selectedCity;

  return useQueries({
    queries: [
      {
        queryKey: [WEATHER_CACHE_KEY.weather, latitude, longitude],
        queryFn: () => getWeather(latitude, longitude),
        enabled: !!latitude && !!longitude,
      },
      {
        queryKey: [WEATHER_CACHE_KEY.forecast, latitude, longitude],
        queryFn: () => getForecast(latitude, longitude),
        enabled: !!latitude && !!longitude,
      },
    ],
  });
};
