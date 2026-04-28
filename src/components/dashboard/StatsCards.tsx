import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatItem {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  trendPositive?: boolean;
}

interface StatsCardsProps {
  stats: StatItem[];
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-9 mt-5">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="w-full min-h-[140px] border border-gray-200 dark:border-slate-700 rounded-[10px] flex justify-between p-6 bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-md group"
        >
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
            <div className="flex items-baseline gap-1.5">
              <h2 className="text-[32px] text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </h2>
            </div>
            <p className={`text-[15px] mt-1 ${
              stat.trendPositive !== false ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.trend}
            </p>
          </div>
          <div className="w-12 h-12 bg-[#f0f5ff] dark:bg-blue-900/40 rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="text-blue-600 dark:text-blue-400 w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
