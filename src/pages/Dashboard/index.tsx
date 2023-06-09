import React, { useEffect, useState} from 'react'
import DashboardOption from '../../components/OptionBox'
import Hud from '@/components/Hud'

import style from '../../styles/Dashboard/page.module.sass'

import TableDashboard from '@/components/TableDashboard'
import axios from 'axios'

import { ITable } from '@/types/tables'





export default function Dashboard() {
  const [datas, setDatas] = useState<ITable[]>([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/datas').then((response)=>{
      setDatas(response.data.default);
    })
  }, [])

  return (
    <main className={style.Page}>
      <Hud/>
      <TableDashboard datas={datas}/>
    </main>
  )
}
