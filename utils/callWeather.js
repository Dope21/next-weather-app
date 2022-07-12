import axios from 'axios'
import { apiKey } from './apiKey'

const callWeather = async location => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
  const weatherData = await axios.get(url)
  console.log(weatherData.data)
  return await weatherData.data
}

export default callWeather
