import { WeatherInfo, WeatherSearch } from './components';

const WeatherPage = () => {
  return (
    <div className="flex flex-col items-center p-4 flex-1 gap-4 justify-center">
      <WeatherSearch />
      <WeatherInfo />
    </div>
  );
};

export default WeatherPage;
