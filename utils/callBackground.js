const callBackground = (weather, timePhase) => {
  
  if (weather === 'Snow') return '/images/weathers/snow.jpg'

  if (weather === 'Rain') return '/images/weathers/rain.jpg'
  if (weather === '	Thunderstorm') return '/images/weathers/rain.jpg'
  if (weather === '	Drizzle') return '/images/weathers/rain.jpg'
  if (weather === '	Tornado') return '/images/weathers/rain.jpg'

  if (weather === 'Mist') return '/images/weathers/mist.jpg'
  if (weather === 'Smoke') return '/images/weathers/mist.jpg'
  if (weather === 'Haze') return '/images/weathers/mist.jpg'
  if (weather === 'Dust') return '/images/weathers/mist.jpg'
  if (weather === 'Fog') return '/images/weathers/mist.jpg'
  if (weather === 'Sand') return '/images/weathers/mist.jpg'
  if (weather === 'Ash') return '/images/weathers/mist.jpg'
  if (weather === 'Squall') return '/images/weathers/mist.jpg'

  if (timePhase === 'd') {
    if (weather === 'Clear') return '/images/weathers/day/clear.jpg'
    if (weather === 'Clouds') return '/images/weathers/day/clouds.jpg'
  }

  if (timePhase === 'n') {
    if (weather === 'Clear') return '/images/weathers/night/clear.jpg'
    if (weather === 'Clouds') return '/images/weathers/night/clouds.jpg'
  }
}

export default callBackground