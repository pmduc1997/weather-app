import { create } from "zustand";

type WeatherStore = {
  city: string;
  setCity: (city: string) => void;
};
export const useWeatherStore = create<WeatherStore>((set) => ({
  city: "",
  setCity: (city: string) => set({ city }),
}));
