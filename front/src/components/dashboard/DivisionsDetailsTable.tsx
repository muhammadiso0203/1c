import React from 'react';

interface DivisionRow {
  id: string;
  department: string;
  employees: number;
  payroll: number;
  average: number;
}

const data: DivisionRow[] = [
  { id: '1', department: 'Производство', employees: 456, payroll: 1245, average: 455 },
  { id: '2', department: 'Администрация', employees: 234, payroll: 678, average: 483 },
  { id: '3', department: 'Продажи', employees: 178, payroll: 534, average: 500 },
  { id: '4', department: 'ИТ', employees: 145, payroll: 487, average: 560 },
  { id: '5', department: 'Бухгалтерия', employees: 112, payroll: 398, average: 592 },
  { id: '6', department: 'Логистика', employees: 89, payroll: 289, average: 541 },
];

const DivisionsDetailsTable: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-[12px] border border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <h3 className="font-semibold text-[18px] text-gray-900 dark:text-white mb-6">
        Детализация по подразделениям
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="bg-[#f8f9fa] dark:bg-slate-700/50 text-[12px] text-gray-500 dark:text-gray-400 ">
              <th className="py-4 px-4 rounded-l-[8px]">ПОДРАЗДЕЛЕНИЕ</th>
              <th className="py-4 px-4 text-center">СОТРУДНИКОВ</th>
              <th className="py-4 px-4 text-center">ФОТ (МЛН СУМ)</th>
              <th className="py-4 px-4 rounded-r-[8px] text-right">СРЕДНЯЯ ЗП (ТЫС. СУМ)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr 
                key={item.id} 
                className="border-b border-gray-100 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors text-[14px]"
              >
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                  {item.department}
                </td>
                <td className="py-3 px-4 text-center text-gray-800 dark:text-gray-200">
                  {item.employees}
                </td>
                <td className="py-3 px-4 text-center text-blue-600 dark:text-blue-400">
                  {item.payroll}
                </td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">
                  {item.average}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DivisionsDetailsTable;
