import { SubmitHandler, useForm } from 'react-hook-form';

import { useGetCities } from '../../../queries';
import { useWeatherStore } from '../../../stores';

type Inputs = {
  city: string;
};
export const WeatherSearch = () => {
  const { setCity } = useWeatherStore();
  const { register, handleSubmit } = useForm<Inputs>();
  useGetCities();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setCity(data.city);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full md:max-w-max flex-col"
    >
      <div className="border justify-between rounded-md flex items-center px-4 py-2 w-full">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            className="px-4 py-2 outline-none "
            type="search"
            placeholder="Please enter a city"
            {...register('city')}
          />
        </div>

        <button
          type="submit"
          className="text-white px-4 py-1 rounded-sm bg-blue-500 hover:bg-blue-600 "
        >
          Search
        </button>
      </div>
    </form>
  );
};
