export interface IUsers {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface IMetrics {
    Totalrevenue: number;
    Incomechange: number;
    Netprofit: number;
    Netprofitchange: number;
    Totalemployees: number;
    Totalemployeeschange: number;
    NumberOfDocuments: number;
    NumberOfDocumentsInSystem: number;
}

export interface IDashboard {
    id: number;
    name: string;
    value: string;
    desc?: string;
}

export interface IFinance {
    id: number;
    name: string;
    value: string;
    desc: string;
}

export interface Polucheniya {
    id: number;
    name: string;
    value: string;
    desc: string;
}


export interface ISoliqData {
    id: number;
    name: string;
    value: string;
    desc: string;
}