import React from 'react';

interface LimitRow {
  article: string;
  department: string;
  limit: string;
  spent: string;
  overLimit: string;
  severity: 'Критично' | 'Предупреждение';
}

const data: LimitRow[] = [
  { article: 'Командировочные расходы', department: 'Отдел Продаж', limit: '50,000,000 сум', spent: '68,200,000 сум', overLimit: '+18,200,000 сум', severity: 'Критично' },
  { article: 'Канцелярские товары', department: 'Администрация', limit: '12,000,000 сум', spent: '14,800,000 сум', overLimit: '+2,800,000 сум', severity: 'Предупреждение' },
  { article: 'Представительские расходы', department: 'Директорат', limit: '80,000,000 сум', spent: '95,000,000 сум', overLimit: '+15,000,000 сум', severity: 'Критично' },
  { article: 'Услуги связи и интернет', department: 'IT-Отдел', limit: '30,000,000 сум', spent: '32,500,000 сум', overLimit: '+2,500,000 сум', severity: 'Предупреждение' },
];

const LimitExceededTable: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-[12px] border border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <h3 className="font-semibold text-[18px] text-gray-900 dark:text-white mb-6">
        Превышение лимитов по статьям расходов
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-[#f8f9fa] dark:bg-slate-700/50 text-[12px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="py-4 px-4 rounded-l-[8px]">СТАТЬЯ РАСХОДОВ</th>
              <th className="py-4 px-4">ПОДРАЗДЕЛЕНИЕ</th>
              <th className="py-4 px-4">ЛИМИТ</th>
              <th className="py-4 px-4">РАСХОД</th>
              <th className="py-4 px-4">ПРЕВЫШЕНИЕ</th>
              <th className="py-4 px-4 rounded-r-[8px] text-right">СТАТУС</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors text-[14px]"
              >
                <td className="py-4 px-4 text-gray-800 dark:text-gray-200 font-medium">{item.article}</td>
                <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{item.department}</td>
                <td className="py-4 px-4 text-gray-600 dark:text-gray-300">{item.limit}</td>
                <td className="py-4 px-4 text-gray-800 dark:text-gray-200">{item.spent}</td>
                <td className="py-4 px-4 text-red-600 dark:text-red-400 font-semibold">{item.overLimit}</td>
                <td className="py-4 px-4 text-right">
                  <span 
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium
                      ${item.severity === 'Критично' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}
                  >
                    {item.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LimitExceededTable;
