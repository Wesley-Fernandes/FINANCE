import React, { useEffect, useState } from 'react'
import {signOut} from "../../hooks/useExit"
import { useRouter } from 'next/navigation';
export default function Exit() {
  const [exit, setExit] = useState(false)
  const router = useRouter();

    useEffect(()=>{
        signOut();
        return () => {
          setExit(true);
        }
    }, [])
  return (
    <>
      {!exit && <h1>Deslogando...</h1>}
      {exit &&  router.push('/')}
    </>
  )
}
