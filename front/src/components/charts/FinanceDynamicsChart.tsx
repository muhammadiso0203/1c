/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Янв', revenue: 285, expenses: 178 },
  { name: 'Фев', revenue: 312, expenses: 195 },
  { name: 'Мар', revenue: 298, expenses: 185 },
  { name: 'Апр', revenue: 345, expenses: 210 },
  { name: 'Май', revenue: 328, expenses: 198 },
  { name: 'Июн', revenue: 367, expenses: 220 },
];

const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="flex justify-center items-center gap-10 mt-2">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-3">
          <div className="flex items-center justify-center relative w-4">
            <div
              className="h-[2px] w-[20px] rounded-full opacity-80"
              style={{ backgroundColor: entry.color }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full border-[1.5px] bg-white"
              style={{ borderColor: entry.color }}
            />
          </div>
          <span
            className="text-[16px]"
            style={{ color: entry.color }}
          >
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const FinanceDynamicsChart = () => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-6 rounded-[10px] border border-gray-200 dark:border-slate-700">
      <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-8">
        Динамика финансовых показателей
      </h3>
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#e2e8f0"
            />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={true}
              tick={{ fill: '#94a3b8', fontSize: 13 }}
              dy={15}
            />
            <YAxis
              axisLine={true}
              tickLine={true}
              tick={{ fill: '#94a3b8', fontSize: 13 }}
              ticks={[0, 95, 190, 285, 380]}
              domain={[0, 380]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "6px",
                border: '1px solid #d1d5db',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                padding: '12px'
              }}
            />
            <Area
              name="Выручка"
              type="monotone"
              dataKey="revenue"
              stroke="#14b8a6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationDuration={1500}
            />
            <Area
              name="Расходы"
              type="monotone"
              dataKey="expenses"
              stroke="#f43f5e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              animationDuration={1500}
            />
            <Legend
              content={<CustomLegend />}
              verticalAlign="bottom"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceDynamicsChart;