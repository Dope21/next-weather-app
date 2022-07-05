import BgWeather from '../components/BgWeather'
import Details from '../components/Details'
import SearchBar from '../components/SearchBar'
import Temp from '../components/Temp'
import callWeather from '../utils/callWeather'
import Metadata from '../components/Metadata'
import { useEffect } from 'react'

export default function Home() {

  const { weather, getWeather } = callWeather()
  
  const getLocation = (location) => {
    getWeather(location)
  }

  useEffect(() => {
    getWeather('United States')
  },[])

  return (
    <div>
      <Metadata />
      <main className='relative w-full h-screen overflow-hidden'>
        {weather.weather !== undefined &&
          <BgWeather
            time={weather.weather[0].icon}
            weather={weather.weather[0].main}
          />
        }

        <div className='relative z-20 max-w-[800px] h-full mx-auto py-9 md:py-12 px-8 md:px-0 flex flex-col items-center justify-between'>
          <SearchBar 
            location={getLocation}
          />
        
          {weather.weather !== undefined &&
            <>
              <Temp 
                key={weather.name}
                location={weather.name}
                icon={weather.weather ? weather.weather[0].icon : null}
                desc={weather.weather ? weather.weather[0].description : null}
                temp={weather.main ? weather.main.temp : null}
              />
              <Details 
                key={weather.sys.id}
                humidity={weather.main ? weather.main.humidity : null}
                speed={weather.wind ? weather.wind.speed : null}
                pressure={weather.main ? weather.main.pressure : null}
              />
            </>
          }

        </div>

      </main>
    </div>
  )
}
