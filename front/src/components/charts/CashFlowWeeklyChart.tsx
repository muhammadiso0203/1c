import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Нед 1', incoming: 78, outgoing: 52 },
  { name: 'Нед 2', incoming: 85, outgoing: 48 },
  { name: 'Нед 3', incoming: 92, outgoing: 55 },
  { name: 'Нед 4', incoming: 88, outgoing: 50 },
];

const CashFlowWeeklyChart = () => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-6 rounded-[10px] border border-gray-200 dark:border-slate-700">
      <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-6">
        Движение денежных средств (недельный анализ)
      </h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            barGap={2}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={true} 
              stroke="#e2e8f0" 
            />
            <XAxis 
              dataKey="name" 
              axisLine={true} 
              tickLine={true} 
              tick={{ fill: '#555555', fontSize: 16 }}
              dy={10}
            />
            <YAxis 
              axisLine={true} 
              tickLine={true} 
              tick={{ fill: '#555555', fontSize: 16 }}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                borderRadius: '6px', 
                border: '1px solid #d1d5db',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                padding: '8px'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="square"
              iconSize={12}
              formatter={(value) => (
                <span className={`text-[16px] ${value === 'incoming' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {value === 'incoming' ? 'Поступления' : 'Выплаты'}
                </span>
              )}
            />
            <Bar 
              name="incoming"
              dataKey="incoming" 
              fill="#10b981" 
              radius={[2, 2, 0, 0]}
              barSize={150}
            />
            <Bar 
              name="outgoing"
              dataKey="outgoing" 
              fill="#ef4444" 
              radius={[2, 2, 0, 0]}
              barSize={150}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashFlowWeeklyChart;
