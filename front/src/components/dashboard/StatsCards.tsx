import React from 'react';
import { useStat } from '@/pages/dashboard/abzor/service/useStats';
import { DollarSign, Wallet, Users, Activity, Loader2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StatItem {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
}

interface StatsCardsProps {
  stats?: StatItem[];
  isLoading?: boolean;
  gridCols?: 1 | 2 | 3 | 4;
}

const iconMap: Record<string, LucideIcon> = {
  'Общая выручка': DollarSign,
  'Чистая прибыль': Wallet,
  'Всего сотрудников': Users,
  'Операций обработано': Activity,
};

const StatsCards: React.FC<StatsCardsProps> = ({ 
  stats, 
  isLoading: externalLoading,
  gridCols = 4
}) => {
  const { data: internalData, isLoading: internalLoading } = useStat();
  

  const loading = externalLoading !== undefined ? externalLoading : (internalLoading && !stats);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[140px]">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  const rawData = stats ?? (Array.isArray(internalData) ? internalData : undefined);

  const displayData: StatItem[] = Array.isArray(rawData)
    ? rawData.map((stat) => {
        if ('title' in stat) return stat as StatItem;
        const s = stat as { name: string; value: string; desc: string };
        return {
          title: s.name,
          value: s.value,
          trend: s.desc,
          icon: iconMap[s.name] || Activity,
        };
      })
    : [];

  const gridConfig = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-2 ${gridConfig[gridCols]} gap-8 mt-5`}>
      {displayData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="w-full full border border-gray-200 dark:border-slate-700 rounded-[10px] flex justify-between p-6 bg-white dark:bg-slate-800 transition-all duration-300 group"
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-tight">{stat.title}</p>
              <div className="flex items-baseline gap-1.5 my-auto">
                <h2 className="text-[27px] text-gray-800 dark:text-white leading-tight">
                  {stat.value}
                </h2>
              </div>
              <p className={`text-[13px] mt-1 ${stat.trend ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                {stat.trend}
              </p>
            </div>
            <div className="w-12 h-12 bg-[#f0f5ff] dark:bg-blue-900/40 rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="text-blue-600 dark:text-blue-400 w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;



