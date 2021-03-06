import Image from 'next/image'
import CurrentTime from './CurrentTime'
import Animate from './Animate'

export default function Temp({ location, icon, desc, temp }) {
  const iconLoader = () => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
  }

  return (
    <Animate
      classname="text-white flex flex-col md:flex-row items-center md:items-end justify-between w-full"
      duration={0.8}
    >
      <div className="text-center md:text-left flex flex-col">
        <p className="text-2xl md:text-4xl font-semibold mb-3 md:mb-10">
          {location}
        </p>
        <CurrentTime />
      </div>

      <div className="text-center md:text-right">
        <p className="text-[82px] md:text-8xl font-bold">{temp}°</p>
        <div className="flex items-center justify-center md:justify-end">
          <span className="text-2xl md:text-4xl mr-3 md:mr-0">{desc}</span>
          <span className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] relative">
            <Image
              loader={iconLoader}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather-icon"
              layout="fill"
              unoptimized={true}
            />
          </span>
        </div>
      </div>
    </Animate>
  )
}
