import '@/styles/globals.css'
// _app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp