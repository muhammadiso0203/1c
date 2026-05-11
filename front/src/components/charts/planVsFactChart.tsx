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
  { name: 'Янв', plan: 1550, fact: 1520, economy: 20 },
  { name: 'Фев', plan: 1480, fact: 1450, economy: 30 },
  { name: 'Мар', plan: 1420, fact: 1360, economy: 50 },
  { name: 'Апр', plan: 1360, fact: 1300, economy: 60 },
  { name: 'Май', plan: 1320, fact: 1250, economy: 70 },
  { name: 'Июн', plan: 1320, fact: 1260, economy: 55 },
];

const PlanVsFactChart = () => {
  return (
    <div className="w-full h-[400px] bg-white dark:bg-slate-800 p-[30px] rounded-[10px] border border-gray-200 dark:border-slate-700 transition-colors duration-300 dark:[&_text]:fill-gray-300! dark:[&_line.recharts-cartesian-grid-line]:stroke-slate-700! dark:[&_.recharts-default-tooltip]:bg-slate-800! dark:[&_.recharts-default-tooltip]:border-slate-700!">
      <h3 className='font-semibold text-[18px] text-gray-900 dark:text-white mb-4 transition-colors duration-300'>
        План vs Факт потребления
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 20, left: -10 }}
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#ddd" />
          <XAxis 
            dataKey="name" 
            axisLine={true} 
            tickLine={true} 
            stroke="#888" 
          />
          <YAxis 
            axisLine={true} 
            tickLine={true} 
            stroke="#888" 
            ticks={[0, 400, 800, 1200, 1600]}
            domain={[0, 1600]}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '10px', backgroundColor: 'white' }} 
            cursor={{ fill: '#bcbcbc' }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="square"
            wrapperStyle={{ paddingTop: "10px" }}
          />
          <Bar 
            name="План" 
            dataKey="plan" 
            fill="#94A3B8" 
            barSize={25}
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            name="Факт" 
            dataKey="fact" 
            fill="#3B82F6" 
            barSize={25}
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            name="Экономия" 
            dataKey="economy" 
            fill="#10B981" 
            barSize={25}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlanVsFactChart;
