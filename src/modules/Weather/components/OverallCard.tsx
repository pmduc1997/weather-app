import { Weather } from '../../../models';
import { getWeatherIcon } from '../../../services';

function OverallCard({ weatherRes }: { weatherRes: Weather }) {
  return (
    <div className="flex md:w-full items-center gap-2 shadow-lg flex-col p-4 w-full rounded-lg md:p-6 ">
      <div className="flex gap-4 items-center">
        <img
          src={getWeatherIcon(weatherRes.weather[0].icon)}
          alt="weather-icon"
        />
        <span>{weatherRes.weather[0].description}</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="font-bold text-2xl">
          {weatherRes.name}, {weatherRes.sys.country}
        </span>
        <div className="flex gap-4">
          <p>lat: {weatherRes.coord.lat}</p>
          <p>lon: {weatherRes.coord.lon}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <span className="text-5xl font-bold">{weatherRes.main.temp}°C</span>
        <div className="flex gap-6">
          <span>L: {weatherRes.main.temp_min} °C</span>
          <span>H: {weatherRes.main.temp_min} °C</span>
        </div>
      </div>
    </div>
  );
}

export default OverallCard;
