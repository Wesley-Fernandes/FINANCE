import Head from "next/head";
import Image from "next/image";
import style from "../styles/homepage/page.module.sass"
import { supabase } from "@/supabase/supabase";



import {TbPigMoney} from 'react-icons/tb'
import { toast } from "react-toastify";
import { ILogin } from "@/types/auth";
import { userContext } from "@/contexts/userContext";
import { IUseLogin } from "@/types/hooks";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const {setUserInfo} = userContext();

  async function makeLogin({event}:IUseLogin){
    event.preventDefault();
    const target = event.target as typeof event.target &{
        email: {value: string},
        password: {value: string}
    };

    const credentials = {
        email: target.email.value,
        password: target.password.value
    }

    if (!credentials.email){
        toast.error("Você precisa informar uma email!")
        return
    }else if (!credentials.password){
        toast.error("Você precisa informar uma senha!")
        return
    }

    else{

        const { data, error } = await supabase.auth.signInWithPassword(
          {email: credentials.email, password: credentials.password})

        if (error) {
            toast.error(error.message)
            return
        }

        toast.success("Você foi logado com sucesso!")
        if(!data.session){
          throw new Error("Withot user data!")
        }
        localStorage.setItem('FinanceToken', data.session.access_token)
        setUserInfo({
          token: data.session.access_token,
          user: data.session.user
        });

        router.push('/Dashboard');
        return

    }

  }


  return (
    <>
      <Head>
        <title>Finance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.Page}>
        <form
          className={style.Formulary}
          onSubmit={(event)=> {makeLogin({event})}}>
          <TbPigMoney className={style.Logotype}/>
          <h1>FINANCE</h1>
          <input type="text" name="email" placeholder="Email..."/>
          <input type="password" name="password" placeholder="Password..."/>
          <button className="btn btn-primary text-white fw-bold">Fazer login</button>
        </form>
      </main>
    </>
  );
}
