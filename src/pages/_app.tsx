import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.sass'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
