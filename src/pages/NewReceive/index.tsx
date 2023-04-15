import React from 'react'

import style from "../../styles/NewReceive/page.module.sass"
export default function NewReceive() {
  return (
    <div className={style.Page}>
      <form className={style.Formulary}>
        <h1>Adicionando nova receita</h1>
        <input type="text" placeholder='Nome e sobrenome' />
        <input type="text" placeholder='Imagem url...' />

        <input type="text" placeholder='Email...' />
        <input type="text" placeholder='Nova senha...' />
        <input type="text" placeholder='Confirme a nova senha...' />

        <input type="date" placeholder='Dia util de seu pagamento'/>
      </form>
    </div>
  )
}
