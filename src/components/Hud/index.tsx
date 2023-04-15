import React from 'react'
import style from "../../styles/components/Hud.module.sass"
import {MdOutlineAttachMoney} from "react-icons/md"
import {TbMoneybag} from "react-icons/tb"
import {RiArrowDownSFill,RiArrowUpSFill} from "react-icons/ri"
export default function Hud() {
  return (
    <div className={style.Hud}>
        <div className={style.UserInformation}>
            <img
                src="http://localhost:3000/user.jpeg"
                className={style.Picture}
                alt="Imagem do usuario"
                title='Wesley Fernandes'/>
        </div>





        <div className={style.ImportantDetails}>

            <div className={style.Detail}>
                <span className={style.DetailTitle}>
                    <MdOutlineAttachMoney/>
                    <RiArrowDownSFill/>
                </span>
                <span className={style.DetailMoney}>
                    -1200,00
                </span>
            </div>

            <div className={style.Detail}>
                <span className={style.DetailTitle}>
                    <TbMoneybag/>
                </span>
                <span className={style.DetailMoney}>
                    1200,00
                </span>
            </div>

            <div className={style.Detail}>
                <span className={style.DetailTitle}>
                    <MdOutlineAttachMoney />
                    <RiArrowUpSFill/>
                </span>
                <span className={style.DetailMoney}>
                    1200,00
                </span>
            </div>

        </div>


    </div>
  )
}
