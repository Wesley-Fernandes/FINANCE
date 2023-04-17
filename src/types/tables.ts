export interface ITable {
    id: number;
    client: string;
    status: string;
    order: string;
    finish: boolean;
    hours: string;
    value: number;
}

export interface IDataTables{
    datas: ITable[]
}
