import React, { useState, useRef, useEffect} from 'react'
import {TbPigMoney} from 'react-icons/tb'

import { supabase } from '@/supabase/supabase'
import style from '../../styles/components/Navbar.module.sass'

import {BiMenu} from "react-icons/bi"
import {IoClose} from "react-icons/io5"
import Link from 'next/link'
import LoggedList from './LoggedList'

import { userContext } from '@/contexts/userContext'


export default function Navbar() {
  const [modal, setModal] = useState<boolean>(false)
  const {userInfo} = userContext()
  const button = useRef<HTMLButtonElement>(null)


  function modalToogle(){
    switch (modal){
      case true:
        setModal(false);
        break;
      case false:
        setModal(true);
        break;
    }
  }

  function buttonClick(){
    button.current?.click();
  }

  useEffect(()=>{
    console.log(userInfo)
  },[])
  return (
    <nav className={style.Navbar}>
        <TbPigMoney className={style.Logotype}/>
        <div className={style.Separator}>
          <button onClick={modalToogle} ref={button}>
            {!modal?(<BiMenu/>):(<IoClose/>)}
          </button>
        </div>

        <div
          className={
            modal?(style.NavbarItemsShow):(style.NavbarItemsHide)}>
              <div className={style.CloseDiv}>
                <button onClick={buttonClick}>
                  <IoClose/>
                </button>
              </div>
              {
                userInfo?.token?(<LoggedList/>):(<></>)
              }
        </div>
    </nav>
  )
}
