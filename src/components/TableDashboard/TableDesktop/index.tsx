import React from "react";
import TableHead from "./TableHead";
import TableLines from "./TableLines";
import style from "../../../styles/components/Table.module.sass";
import { IDataTables, ITable} from "@/types/tables";

export default function TableDesktop({ datas }: IDataTables) {
  return (
    <table className="table table-light">
        <TableHead />
        <tbody className={style.Tables}>
        {
            datas.map(({ client, hours, id, order, status, value, finish }: ITable) => (
                <TableLines
                    client={client}
                    order={order}
                    status={status}
                    id={id}
                    key={id}
                    finish={finish}
                    value={value}
                    hours={hours}
                />
        ))}
        </tbody>
    </table>
  );
}
