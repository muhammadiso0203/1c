import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Производство', days: 260 },
  { name: 'Логистика', days: 150 },
  { name: 'Продажи', days: 140 },
  { name: 'ИТ', days: 110 },
  { name: 'Администрация', days: 80 },
  { name: 'Бухгалтерия', days: 70 },
];

const DepartmentVacationsChart = () => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-6 rounded-[12px] border border-gray-200 dark:border-slate-700">
      <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-6">
        Отпуска по подразделениям (дни)
      </h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={true}
              stroke="#e2e8f0"
              className="dark:stroke-slate-700 opacity-60"
            />
            <XAxis
              type="number"
              tickLine={true}
              tick={{ fill: '#64748b', fontSize: 13 }}
              domain={[0, 280]}
              ticks={[0, 70, 140, 210, 280]}
            />
            <YAxis
              type="category"
              dataKey="name"
              tickLine={true}
              tick={{ fill: '#64748b', fontSize: 13 }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: '1px solid #e2e8f0',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                padding: '12px'
              }}
              formatter={(value) => [`${value} дн.`, 'Количество дней']}
            />
            <Bar dataKey="days" fill="#3b82f6" radius={[0, 3, 3, 0]} barSize={35} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DepartmentVacationsChart;
