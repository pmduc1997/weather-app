import { WeatherInfo, WeatherSearch } from "./components";

const WeatherPage = () => {
  return (
    <div className="w-screen flex justify-center mt-12">
      <div className="w-[768px]">
        <WeatherSearch />
        <WeatherInfo />
      </div>
    </div>
  );
};

export default WeatherPage;
