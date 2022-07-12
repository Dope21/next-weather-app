import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Weather App create by Next.js and Openweathermap API" />
      <meta name="author" content="Thanasak Limsila" />
      <meta name="og:site_name" content="Weather App" />
      <meta name="og:title" content="Weather App" />
      <meta name="og:description" content="Weather App create by Next.js and Openweathermap API" />
      <meta name="og:url" content="https://weather-app-three-theta.vercel.app/" />
      <meta name="og:image" content="https://weather-app-three-theta.vercel.app/thumbnail.png" />
      <title>Weather App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Metadata