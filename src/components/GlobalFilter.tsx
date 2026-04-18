import { useState } from 'react';
import { MapPin, Calendar, X } from 'lucide-react';

const GlobalFilter = () => {
    const [region, setRegion] = useState("Все области");
    const [period, setPeriod] = useState("Текущий месяц");

    const isFiltered = region !== "Все области" || period !== "Текущий месяц";

    const handleReset = () => {
        setRegion("Все области");
        setPeriod("Текущий месяц");
    };

    return (
        <div className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700/60 rounded-[12px] shadow-sm flex flex-col transition-colors duration-300 overflow-hidden">
            {/* Top Row: Filters and Reset */}
            <div className="px-6 py-4 flex items-center gap-8">
                {/* Location Select */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-slate-500 dark:text-slate-400" />
                        <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">Область:</span>
                    </div>
                    <div className="relative">
                        <select 
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-[13px] rounded-lg pl-3 pr-9 py-2 min-w-[220px] outline-none hover:border-gray-300 dark:hover:border-slate-500 cursor-pointer appearance-none transition-all"
                        >
                            <option>Все области</option>
                            <option>Ташкентская область</option>
                            <option>Самаркандская область</option>
                            <option>Бухарская область</option>
                            <option>Ферганская область</option>
                            <option>Андижанская область</option>
                            <option>Наманганская область</option>
                            <option>Кашкадарьинская область</option>
                            <option>Сурхандарьинская область</option>
                            <option>Джизакская область</option>
                            <option>Сырдарьинская область</option>
                            <option>Навоийская область</option>
                            <option>Хорезмская область</option>
                            <option>Республика Каракалпакстан</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Calendar Select */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-slate-500 dark:text-slate-400" />
                        <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">Период:</span>
                    </div>
                    <div className="relative">
                        <select 
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-[13px] rounded-lg pl-3 pr-9 py-2 min-w-[220px] outline-none hover:border-gray-300 dark:hover:border-slate-500 cursor-pointer appearance-none transition-all"
                        >
                            <option>Сегодня</option>
                            <option>Вчера</option>
                            <option>Текущая неделя</option>
                            <option>Прошлая неделя</option>
                            <option>Текущий месяц</option>
                            <option>Прошлый месяц</option>
                            <option>Текущий квартал</option>
                            <option>Прошлый квартал</option>
                            <option>Текущий год</option>
                            <option>Прошлый год</option>
                            <option>Произвольный период</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Reset Button */}
                {isFiltered && (
                    <button 
                        onClick={handleReset}
                        className="flex items-center gap-1.5 text-slate-500 transition-colors ml-4 group"
                    >
                        <X size={16} />
                        <span className="text-[13px] font-medium">Сбросить</span>
                    </button>
                )}
            </div>

            {/* Bottom Row: Active Filters */}
            {isFiltered && (
                <>
                    <div className="w-full h-px bg-gray-100 dark:bg-slate-700/50" />
                    <div className="px-6 py-3 bg-slate-50/50 dark:bg-slate-900/20 flex items-center gap-4">
                        <span className="text-[12px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            Активные фильтры:
                        </span>
                        
                        <div className="flex flex-wrap gap-2">
                            {region !== "Все области" && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full animate-in zoom-in duration-300">
                                    <MapPin size={12} className="text-blue-500" />
                                    <span className="text-[13px] font-medium text-blue-600 dark:text-blue-400">{region}</span>
                                </div>
                            )}
                            
                            {period !== "Текущий месяц" && (
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-full animate-in zoom-in duration-300">
                                    <Calendar size={12} className="text-emerald-500" />
                                    <span className="text-[13px] font-medium text-emerald-600 dark:text-emerald-400">{period}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default GlobalFilter;
