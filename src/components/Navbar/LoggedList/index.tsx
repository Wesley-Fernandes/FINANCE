import React from "react";
import style from "../../../styles/components/Navbar.module.sass";
import Link from "next/link";


export default function LoggedList() {
  return (
    <ul className={style.NavbarLista}>
        <li>
            <Link href={"/Dashboard"}>Dashboard</Link>
        </li>
        <li>
            <Link href={"/NewReceive"}>
                Criar
            </Link>
        </li>
        <li>
            <Link href={"/Search"}>
                Pesquisar
            </Link>
        </li>
        <li>
            <Link href={"/Exit"}>
                Deslogar
            </Link>
        </li>
    </ul>
  );
}
