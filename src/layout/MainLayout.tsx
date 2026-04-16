import { useState } from "react";
import { menuBar } from "../data/menuBar";

const MainLayout = () => {
    const [activeId, setActiveId] = useState(menuBar[0].id);
    const selectedItem = menuBar.find(item => item.id === activeId);
    const CurrentPage = selectedItem?.key;

    return (
        <div className="flex h-screen bg-white">
            <div className="w-[280px] border-r border-gray-200 flex flex-col py-6">
                <div className="px-6 mb-6">
                    <h1 className="text-xl font-semibold text-slate-800 leading-tight">ERP 1C</h1>
                    <p className="text-[14px] text-gray-500 mt-1">Модули системы</p>
                </div>
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                <nav className="flex-1 px-3 space-y-1">
                    {menuBar.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeId === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveId(item.id)}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl
                                    ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <Icon
                                    size={20}
                                    className={`${isActive ? "text-blue-500" : "text-gray-500 group-hover:text-gray-900"}`}
                                />
                                <span className="text-[14px] font-medium text-left leading-tight">
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* O'ng tomon - Sahifalar chiqadigan joy */}
            <div className="flex-1 bg-[#f8fafc] overflow-auto">
                {/* 4. Agar komponent bo'lsa uni chiqaramiz, bo'lmasa xabar chiqadi */}
                {CurrentPage ? (
                    <div className="p-8 animate-in fade-in duration-500">
                        <CurrentPage />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Sahifa topilmadi
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainLayout;