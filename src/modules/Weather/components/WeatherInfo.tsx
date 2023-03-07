import dayjs from "dayjs";
import { useGetWeather } from "../Weather.query";

export const WeatherInfo = () => {
  const [{ data: weatherRes }, { data: forecastRes }] = useGetWeather();

  if (!weatherRes || !forecastRes) return null;

  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="font-bold">
        {weatherRes.data.name}, {weatherRes.data.sys.country}
      </h5>
      <p>Coordinate:</p>
      <p>Lat: {weatherRes.data.coord.lat}</p>
      <p>Lon: {weatherRes.data.coord.lon}</p>
      <p>temperature: {weatherRes.data.main.temp} °C</p>
      <p>Wind: {weatherRes.data.wind.speed}</p>
      <b>Hourly:</b>
      <div className="flex py-4">
        {forecastRes.data.list.map((item, index) => {
          if (index > 6) return null;
          return (
            <div className="shadow-sm mr-2 p-2 flex flex-col bg-slate-200 rounded">
              <p>{dayjs(item.dt_txt).format("HH:mm")}</p>
              {item.main.temp} °C
            </div>
          );
        })}
      </div>
    </div>
  );
};
