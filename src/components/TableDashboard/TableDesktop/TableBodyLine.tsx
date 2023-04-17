import React from 'react'
import style from "../../../styles/components/Table.module.sass";

export default function TableBodyLine({children}:any) {
  return (
    <td className={style.Line}>
        {children}
    </td>
  )
}
