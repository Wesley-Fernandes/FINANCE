import React, { cache, useEffect, useState } from 'react'
import { userContext } from '@/contexts/userContext'
import { cookies } from 'next/dist/client/components/headers';
import {supabase} from '../../supabase/supabase'
interface IPrivate{
  children: React.ReactNode
}
export default function Private({children}:IPrivate) {
  const [loading, setLoading] = useState<boolean>(true);
  const [authorization, setAuthorization] = useState<string|undefined>('');

  async function getSession(){
    const session = await supabase.auth.getSession();
    setAuthorization(session.data.session?.access_token)
    setLoading(false);
  }


  useEffect(()=>{
    getSession();
  },[])
  return (
    <>
      {loading && (<h1>Carregando...</h1>)}
      {!authorization && loading===false && (<h1>Sem autorização!</h1>)}
      {authorization && (
        children
      )}
    </>
  )
}
