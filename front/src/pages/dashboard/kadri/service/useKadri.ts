import { useQuery } from "@tanstack/react-query";
import type { IDashboard } from "../../interface/interface";

export const useGetKadri = () => {
    return useQuery<IDashboard[]>({
        queryKey: ["kadri-stats"],
        queryFn: () => new Promise<IDashboard[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: "Общая численность", value: "1 240 чел.", desc: "Активные контракты" },
                    { id: 2, name: "Принято за месяц", value: "45 чел.", desc: "+15% к прошлому мес." },
                    { id: 3, name: "Уволено за месяц", value: "12 чел.", desc: "В пределах текучести" },
                    { id: 4, name: "Текучесть кадров", value: "1.8%", desc: "Ниже целевого (2.5%)" }
                ]);
            }, 500);
        })
    });
};
