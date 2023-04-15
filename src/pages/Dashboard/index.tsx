import React, { useEffect, useState} from 'react'
import DashboardOption from '../../components/OptionBox'
import Hud from '@/components/Hud'

import style from '../../styles/Dashboard/page.module.sass'
import Tables from '@/components/Tables'
import axios from 'axios'
import { IData } from '../api/datas'
export default function Dashboard() {
  const [datas, setDatas] = useState<IData[]>([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/datas').then((response)=>{
      setDatas(response.data.default);
    })
  }, [])
  return (
    <main className={style.Page}>
      <Hud/>
      <Tables datas={datas}/>

    </main>
  )
}
