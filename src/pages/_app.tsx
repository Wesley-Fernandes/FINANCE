import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import {ToastContainer} from 'react-toastify';
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.sass'
import Private from '@/components/Private';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const private_routes = ['/Dashboard', '/EditReceive', '/NewReceive'];

  if(private_routes.includes(router.pathname)){
    console.log("Rota privada!")
  }else{
    console.log("Rota publica!")
  }
  return (
    <>
      {private_routes.includes(router.pathname) && (
        <Private>
          <ToastContainer />
          <Navbar/>
          <Component {...pageProps} />
        </Private>
      )}
      {
        !private_routes.includes(router.pathname) && (
          <>
            <ToastContainer />
            <Navbar/>
            <Component {...pageProps} />
          </>
        )
      }
    </>
  )
}
