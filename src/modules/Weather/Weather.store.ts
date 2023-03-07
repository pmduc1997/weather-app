import { create } from "zustand";
import { City } from "../../services/weather.type";

type WeatherStore = {
  city: string;
  setCity: (city: string) => void;
  selectedCity: City;
  setSelectedCity: (city: City) => void;
};
export const useWeatherStore = create<WeatherStore>((set) => ({
  city: "",
  setCity: (city: string) => {
    set({ city });
  },
  selectedCity: { latitude: 0, longitude: 0 } as any,
  setSelectedCity: (selectedCity: City) => set({ selectedCity }),
}));
