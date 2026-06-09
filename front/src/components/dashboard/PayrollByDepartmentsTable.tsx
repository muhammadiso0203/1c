import React from 'react';

interface PayrollRow {
  department: string;
  count: number;
  accrued: string;
  paid: string;
  average: string;
}

const data: PayrollRow[] = [
  { department: 'Служба АМИ/МДМС', count: 245, accrued: '860,000,000 сум', paid: '860,000,000 сум', average: '3.5 млн сум' },
  { department: 'Центральная бухгалтерия', count: 52, accrued: '210,000,000 сум', paid: '210,000,000 сум', average: '4.0 млн сум' },
  { department: 'Сбытовой департамент', count: 480, accrued: '1,440,000,000 сум', paid: '1,300,000,000 сум', average: '3.0 млн сум' },
  { department: 'IT-Отдел', count: 45, accrued: '225,000,000 warm', paid: '225,000,000 сум', average: '5.0 млн сум' },
  { department: 'Служба логистики и склад', count: 120, accrued: '360,000,000 сум', paid: '360,000,000 сум', average: '3.0 млн сум' },
];

const PayrollByDepartmentsTable: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-[12px] border border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <h3 className="font-semibold text-[18px] text-gray-900 dark:text-white mb-6">
        Расчетная ведомость по отделам
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#f8f9fa] dark:bg-slate-700/50 text-[12px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="py-4 px-4 rounded-l-[8px]">ПОДРАЗДЕЛЕНИЕ</th>
              <th className="py-4 px-4">ШТАТ (ЧЕЛ.)</th>
              <th className="py-4 px-4">НАЧИСЛЕНО</th>
              <th className="py-4 px-4">ВЫПЛАЧЕНО</th>
              <th className="py-4 px-4 rounded-r-[8px] text-right">СРЕДНЯЯ ЗАРПЛАТА</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors text-[14px]"
              >
                <td className="py-4 px-4 text-gray-800 dark:text-gray-200 font-medium">{item.department}</td>
                <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{item.count} чел.</td>
                <td className="py-4 px-4 text-gray-800 dark:text-gray-200 font-semibold">{item.accrued}</td>
                <td className="py-4 px-4 text-green-600 dark:text-green-400 font-semibold">{item.paid}</td>
                <td className="py-4 px-4 text-right text-gray-600 dark:text-gray-300">{item.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollByDepartmentsTable;
