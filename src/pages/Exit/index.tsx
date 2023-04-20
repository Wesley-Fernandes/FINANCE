import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase/supabase';
import { useRouter } from 'next/navigation';
import { userContext } from '@/contexts/userContext';
export default function Exit() {
  const [exit, setExit] = useState(false);
  const {setUserNull} = userContext();
  const router = useRouter();

    async function signOut(){
      const { error } = await supabase.auth.signOut();
    }

    useEffect(()=>{
        signOut();
        setUserNull();
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
