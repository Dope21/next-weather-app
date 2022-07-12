import axios from 'axios'
import { apiKey } from './apiKey'

export const callWeather = async location => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
  const weather = await axios.get(url)
  return await weather.data
}

export async function getServerSideProps() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${'United States'}&units=metric&appid=${apiKey}`
  const weather = await axios.get(url)

  return {
    props: {
      ssrWeather: weather.data,
    },
  }
}
