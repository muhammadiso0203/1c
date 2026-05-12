import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Янв', employees: 1150, fot: 180, avgSalary: 400 },
  { name: 'Фев', employees: 1206, fot: 192, avgSalary: 423 }, 
  { name: 'Мар', employees: 1215, fot: 198, avgSalary: 430 },
  { name: 'Апр', employees: 1230, fot: 205, avgSalary: 440 },
  { name: 'Май', employees: 1240, fot: 210, avgSalary: 450 },
  { name: 'Июн', employees: 1260, fot: 215, avgSalary: 460 },
];

export default function SimpleDashboardChart() {
  return (
    <div className="w-full bg-white dark:bg-slate-800 p-[20px] rounded-[10px] border border-gray-200 dark:border-slate-700 transition-colors duration-300 dark:[&_text]:fill-gray-300! dark:[&_line.recharts-cartesian-grid-line]:stroke-slate-700! dark:[&_.recharts-default-tooltip]:bg-slate-800! dark:[&_.recharts-default-tooltip]:border-slate-700!">
      <h3 className='font-semibold text-[18px] text-gray-900 dark:text-white mb-4 transition-colors duration-300'>
        Персонал и ФОТ
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          {/* Orqa fon chiziqlari */}
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* Pastki o'q (Oylar) */}
          <XAxis dataKey="name" />
          
          {/* Chap va O'ng o'qlar */}
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          
          {/* Standart ma'lumot oynasi va afsona */}
          <Tooltip contentStyle={{ borderRadius: '10px', backgroundColor: 'white' }}/>
          <Legend />
          
          {/* Ustun (Xodimlar soni) - Chap o'qqa bog'langan */}
          <Bar yAxisId="left" dataKey="employees" name="Сотрудников" fill="#3b82f6" barSize={70} radius={[6,6,0,0]}/>
          
          {/* Chiziqlar (FOT va Oylik) - O'ng o'qqa bog'langan */}
          <Line yAxisId="right" type="monotone" dataKey="fot" name="ФОТ (млн)" stroke="#10b981" />
          <Line yAxisId="right" type="monotone" dataKey="avgSalary" name="Ср. ЗП (тыс)" stroke="#f59e0b" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}