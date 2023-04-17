import React from 'react'
import style from "../../../styles/components/Table.module.sass";
export default function TableHead() {
  const tableClass=`
    w-25
    d-flex
    align-items-center
    justify-content-center`
  return (
    <thead className="d-flex w-100">
          <tr className="d-flex w-100">
            <th scope="col" >#ID</th>
            <th scope="col" className={tableClass}>
              Cliente
            </th>
            <th scope="col" className={tableClass}>
              Status
            </th>
            <th scope="col" className={tableClass}>
              Tipo
            </th>
            <th scope="col" className={tableClass}>
              Dia
            </th>
            <th scope="col" className={tableClass}>
              Horas
            </th>
            <th scope="col" className={tableClass}>
              Valor
            </th>
            <th scope="col" className={tableClass}>
              Ações
            </th>
          </tr>
        </thead>
  )
}
