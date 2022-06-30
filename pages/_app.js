import '../styles/globals.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps }) {

  return(
    <>
      <Component {...pageProps}/>
    </>
  ) 
}

export default MyApp
