import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('preline')
  }, [])

  return <div className='w-[90%] mx-auto'>
    <Navbar />
    <Component {...pageProps} />
  </div>
}