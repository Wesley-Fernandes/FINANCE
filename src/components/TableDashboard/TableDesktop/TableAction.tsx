import React from "react";
import style from "../../../styles/components/Table.module.sass";
import { VscGear } from "react-icons/vsc";
import {MdDelete, MdModeEdit, MdCheck} from "react-icons/md";

export default function TableAction() {
  return (
    <div className="d-flex dropdown w-100">
      <a
        className=" d-flex align-items-center justify-content-center BadgeAdjust btn w-100 btn-primary"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <VscGear className={style.ButtonSvg} />
      </a>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item">
          <MdCheck/> Finalizar
          </button>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <button className="dropdown-item">
            <MdModeEdit /> Editar
          </button>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <MdDelete className="text-danger"/> Deletar
          </a>
        </li>
      </ul>
    </div>
  );
}
