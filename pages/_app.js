import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AuthProvider from '../context/authProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('preline')
  }, [])

  return <AuthProvider>
    <div className='w-[90%] mx-auto'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </AuthProvider>
}