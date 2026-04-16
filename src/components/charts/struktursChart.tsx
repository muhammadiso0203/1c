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
       <div style={{ width: '100%', height: 400, backgroundColor: '#fff', padding: '30px', borderRadius: '10px', border: "1px solid #E5E7EB" }}>
       <h3 className='font-semibold text-[18px]'>
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
            // Eng oson yo'li: chiziqlar va yozuvlarni avtomatik chiqarish
            label={({ name, value }) => `${name}: ${value}%`} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleChart;