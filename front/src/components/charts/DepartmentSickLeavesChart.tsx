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
  { name: 'Производство', days: 150 },
  { name: 'Продажи', days: 85 },
  { name: 'Логистика', days: 75 },
  { name: 'Администрация', days: 45 },
  { name: 'ИТ', days: 30 },
  { name: 'Бухгалтерия', days: 20 },
];

const DepartmentSickLeavesChart = () => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-6 rounded-[12px] border border-gray-200 dark:border-slate-700">
      <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-6">
        Больничные листы по подразделениям (дни)
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
              domain={[0, 160]}
              ticks={[0, 40, 80, 120, 160]}
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
            <Bar dataKey="days" fill="#f59e0b" radius={[0, 3, 3, 0]} barSize={35} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DepartmentSickLeavesChart;
