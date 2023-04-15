import React from "react";
import style from "../../styles/components/Table.module.sass";
import {VscGear} from "react-icons/vsc"
import {FiInfo} from "react-icons/fi"

import { IData } from "@/pages/api/datas";

interface ITable{
  datas: IData[];
}
export default function Tables({datas}:ITable) {

console.log(datas)
  return (
      <table className="table table-dark">
        <thead className="d-flex w-100">
          <tr className="d-flex w-100">
            <th scope="col" >#ID</th>
            <th scope="col" className="w-25">
              Cliente
            </th>
            <th scope="col" className="w-25">
              Tipo
            </th>
            <th scope="col" className="w-25">
              Dia
            </th>
            <th scope="col" className="w-25">
              Horas
            </th>
            <th scope="col" className="w-25">
              Valor
            </th>
            <th scope="col" className="w-25">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className={style.Tables}>
          {
            datas.map((data)=>(
                <tr key={data.id} className={style.TableLines}>
                    <td scope="row">
                      <FiInfo className="cursor" title={String(data.id)}/>
                    </td>
                    <td className={style.Line}>
                      {data.cliente}
                    </td>
                    <td className={style.Line}>
                    {
                      data.status==="RECEBER"?(
                        <span className="badge bg-success w-50 opacity-50">{data.status}</span>
                      ):(
                        <span className="badge bg-danger w-50 opacity-50">{data.status}</span>
                      )
                    }
                  </td>
                  <td className={style.Line}>{data.data_pedido}</td>
                  <td className={style.Line}>{data.horas}</td>
                  <td className={style.Line}>R$ {data.valor.toFixed(2)}</td>
                  <td className={style.Line}>
                    <button className="btn btn-secondary w-100">
                      <VscGear className={style.ButtonSvg}/>
                    </button>
                  </td>
                </tr>

            ))
          }

        </tbody>
      </table>
  );
}
