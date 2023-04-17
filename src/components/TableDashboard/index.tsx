import React, { useState } from "react";

import style from "../../styles/components/Table.module.sass";
import TableDesktop from "./TableDesktop";

import {VscGear} from "react-icons/vsc"
import {FiInfo} from "react-icons/fi"

import { IData } from "@/pages/api/datas";
import { IDataTables } from "@/types/tables";


export default function TableDashboard({datas}:IDataTables) {
  const  [ mobile, setMobile] = useState(false)


  return (
      <>
        {!mobile && <TableDesktop datas={datas} />}
        {mobile && <p>Mobile</p>}
      </>
  );
}
