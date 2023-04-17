import React from 'react'

import style from "../../styles/NewReceive/page.module.sass"
export default function NewReceive() {
  return (
    <div className={style.Page}>
      <form className={style.Formulary + " p-2"}>
        <h1>Nova receita</h1>
        <p>
          Complete todos os campos para poder completar a nova receita.
        </p>




        <select
          id="Cliente"
          className="form-select mb-3"
          aria-label="Default select example">
            <option selected disabled>Selecione o nome do cliente
            </option>
            <option value="1">José Willian</option>
            <option value="2">Jessica Cardoso</option>
            <option value="3">Wesley Fernandes</option>
        </select>

        <select
          id="Cliente"
          className="form-select mb-3"
          aria-label="Default select example">
            <option selected disabled>Metodo de pagamento
            </option>
            <option value="1">Por dinheiro</option>
            <option value="2">Por descanso</option>
        </select>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label">
              Dia para executar
          </label>
          <input
            type="date"
            className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label">
              Quantidade de horas
          </label>
          <input
            type="number"
            className="form-control" id="exampleFormControlInput1" placeholder="Exemplo: 6"/>
        </div>

        <button className='btn btn-primary'>Criar</button>
      </form>

    </div>
  )
}
