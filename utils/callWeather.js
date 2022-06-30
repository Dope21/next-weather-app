import axios from "axios"
import { useState } from "react"

function callWeather() {

  const apiKey = "1f9ba7cf45d9f160728f55744c8a1088"
  const [weather, setWeather] = useState({})
  const getWeather = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    axios.get(url)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
  }

  return {
    weather,
    getWeather,
  }

}

export default callWeather