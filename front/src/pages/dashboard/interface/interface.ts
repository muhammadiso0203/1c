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

    ExpensesOfThePeriod_9410?: number;
    ExpensesOfThePeriodChange_9410?: number;
    ExpensesOfThePeriod_9420?: number;
    ExpensesOfThePeriodChange_9420?: number;
    ExpensesOfThePeriod_9430?: number;
    ExpensesOfThePeriodChange_9430?: number;
    ExpensesOfThePeriod_9100?: number;
    ExpensesOfThePeriodChange_9100?: number;
    ExpensesOfThePeriod_9610?: number;
    ExpensesOfThePeriodChange_9610?: number;
    ExpensesOfThePeriod_9620?: number;
    ExpensesOfThePeriodChange_9620?: number;
    ExpensesOfThePeriod_9700?: number;
    ExpensesOfThePeriodChange_9700?: number;

    Staff?: number;
    Payroll?: number;
    DynamicsOfFinancialIndicators?: number;
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