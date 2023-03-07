import { useGetWeather } from '../../../queries';

import HourlyCard from './HourlyCard';
import OverallCard from './OverallCard';

export const WeatherInfo = () => {
  const [{ data: weatherRes }, { data: forecastRes }] = useGetWeather();

  if (!weatherRes || !forecastRes) return null;

  return (
    <div className="flex w-full flex-col items-center md:w-[60vw] py-6 gap-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <OverallCard weatherRes={weatherRes.data} />
      <HourlyCard forecastRes={forecastRes.data} />
    </div>
  );
};
