export interface IUsers {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface IMetrics {
    id: number;
    label: string;
    value: string;
    description?: string;
    category?: 'primary' | 'secondary';
    trend?: string;
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

