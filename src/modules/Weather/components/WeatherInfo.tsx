import { useGetWeather } from "../Weather.query";

export const WeatherInfo = () => {
  const { data: weatherRes } = useGetWeather();

  if (!weatherRes) return null;

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="font-bold">
        {weatherRes.data.name}, {weatherRes.data.sys.country}
      </h5>
      <p>Coordinate:</p>
      <p>Lat: {weatherRes.data.coord.lat}</p>
      <p>Lon: {weatherRes.data.coord.lon}</p>
      <p>temperature: {weatherRes.data.main.temp - 273.15} C</p>
      <p>Wind: {weatherRes.data.wind.speed}</p>
    </div>
  );
};
