import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Фонд оплаты труда', value: 38, color: '#14b8a6' },
  { name: 'Закупки и снабжение', value: 25, color: '#3b82f6' },
  { name: 'Налоги', value: 15, color: '#f59e0b' },
  { name: 'Энергоресурсы', value: 12, color: '#eab308' },
  { name: 'Ремонт и амортизация', value: 7, color: '#8b5cf6' },
  { name: 'Boshqa', value: 3, color: '#94a3b8' },
];

const SimpleChart = () => {
  return (
       <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-[20px] rounded-[10px] border border-gray-200 dark:border-slate-700 transition-colors duration-300 dark:[&_text]:fill-gray-300! dark:[&_.recharts-default-tooltip]:bg-slate-800! dark:[&_.recharts-default-tooltip]:border-slate-700!">
       <h3 className='font-semibold text-[18px] text-gray-900 dark:text-white mb-6 transition-colors duration-300'>
        Структура расходов
      </h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}%`} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip wrapperClassName="dark:!bg-slate-800 dark:!border-slate-700" contentStyle={{ borderRadius: '10px', backgroundColor: 'white'}} itemStyle={{color: "var(--tooltip-text)" }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleChart;