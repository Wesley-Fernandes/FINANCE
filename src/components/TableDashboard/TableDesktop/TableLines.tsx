import React from "react";
import { FiInfo } from "react-icons/fi";

import style from "../../../styles/components/Table.module.sass";
import { ITable } from "@/types/tables";
import TableBodyLine from "./TableBodyLine";
import TableAction from "./TableAction";



export default function TableLines({
  client,
  finish,
  hours,
  id,
  order,
  status,
  value,
}: ITable) {

  const bdSucess = `
    btn
    disabled
    BadgeAdjust
    d-flex
    align-items-center
    justify-content-center
    bg-success
    opacity-50`;
  const bdPrimary = `
    btn
    disabled
    BadgeAdjust
    d-flex
    align-items-center
    justify-content-center
    btn-outline-primary
    `;
  const bdNeutro =  `
    btn
    d-flex
    disabled
    BadgeAdjust
    d-flex
    align-items-center
    justify-content-center
    bg-secondary
    opacity-50`;
  const bdDanger = `
    btn
    disabled
    BadgeAdjust
    d-flex
    align-items-center
    justify-content-center
    bg-secondary
    opacity-50`;
  const bdWarning = `
    btn
    disabled
    BadgeAdjust
    d-flex
    align-items-center
    justify-content-center
    text-center
    bg-secondary
    opacity-50`;

  return (
    <tr key={id} className={style.TableLines}>

      <td
        scope="row"
        className="d-flex align-items-center justify-content-center">
          <FiInfo className="cursor" title={"Indice " + String(id)} />
      </td>

      <TableBodyLine key={id + "0"}>
        {client}
      </TableBodyLine>

      <TableBodyLine key={id + "1"}>
        {status ? (
          <span className={bdPrimary}>
            Finalizado
          </span>
        ) : (
          <span className={bdDanger}>
            Ocioso
          </span>
        )}
      </TableBodyLine>

      <TableBodyLine key={id + "2"}>
        <span className={bdPrimary}>
          {status}
        </span>
      </TableBodyLine>

      <TableBodyLine key={id + "3"}>
        {order}
      </TableBodyLine>

      <TableBodyLine key={id + "4"}>
        {hours} horas
      </TableBodyLine>

      <TableBodyLine key={id + "5"}>
        R$ {value.toFixed(2)}
      </TableBodyLine>

      <TableBodyLine key={id + "6"}>
        <TableAction/>
      </TableBodyLine>
    </tr>
  );
}
