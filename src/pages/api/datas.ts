// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as datas_json from './data.json'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IData{
  id: number;
  cliente: string;
  status: string;
  data_pedido: string;
  horas: string;
  valor: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData[]>
) {
  res.status(200).json(datas_json)
}
