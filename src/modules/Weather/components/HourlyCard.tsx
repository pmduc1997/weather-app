import dayjs from 'dayjs';
import { Forecast } from 'models';

import { Carousel } from 'react-responsive-carousel';
import { getWeatherIcon } from '../../../services/weather.service';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export const HourlyCard = ({ forecastRes }: { forecastRes: Forecast }) => {
  return (
    <Carousel
      showIndicators={false}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      centerSlidePercentage={33}
      infiniteLoop={true}
      swipeScrollTolerance={16}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeable={true}
      className="w-full shadow-lg p-4  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg"
    >
      {forecastRes.list.map((item, index: number) => {
        return (
          <div className="flex items-center flex-col gap-1 aspect-video w-[20vw] md:w-[10vw] rounded-md">
            <small>{dayjs(item.dt_txt).format('DD/MM')}</small>
            <strong>{dayjs(item.dt_txt).format('HH:mm')}</strong>

            <img
              className="!w-fit object-contain"
              src={getWeatherIcon(forecastRes.list[index].weather[0].icon)}
              alt="weather-icon"
            />
            <small> {item.main.temp}°C</small>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HourlyCard;
