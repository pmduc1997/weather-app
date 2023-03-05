import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getWeather } from "../../services/weather.service";
import { useWeatherStore } from "./Weather.store";

export const useGetWeather = () => {
  const { city } = useWeatherStore();
  return useQuery(["getWeather", city], () => getWeather(city), {
    retry: 0,
    enabled: !!city,
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
};
