import React, { useState, useRef} from 'react'
import {TbPigMoney} from 'react-icons/tb'
import style from '../../styles/components/Navbar.module.sass'

import {BiMenu} from "react-icons/bi"
import {IoClose} from "react-icons/io5"
import Link from 'next/link'
export default function Navbar() {
  const [modal, setModal] = useState<boolean>(false)
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
              <ul className={style.NavbarLista}>
                <li>
                  <Link href={"/Dashboard"}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href={"/NewReceive"}>
                    Nova receita
                  </Link>
                </li>
                <li>Adicionar nova receita</li>
                <li>Adicionar nova receita</li>
                <li>Adicionar nova receita</li>
                <li>Adicionar nova receita</li>
              </ul>
        </div>
    </nav>
  )
}
