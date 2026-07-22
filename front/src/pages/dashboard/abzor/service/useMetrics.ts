import { useQuery } from "@tanstack/react-query";
import api from "@/config/config";
import type { IMetrics } from "@/pages/dashboard/interface/interface";
import { useDateRange } from "@/context/DateRangeContext";

export const useMetrics = () => {
    const { apiDateFrom, apiDateTo, regionId } = useDateRange();

    return useQuery({
        queryKey: ["dashboards", apiDateFrom, apiDateTo, regionId],
        queryFn: () =>
            api.post<IMetrics>("/dashboard/totalrevenue", {
                data_nach: apiDateFrom,
                data_kon: apiDateTo,
                items: [{ ID: regionId }],
            }).then((res) => res.data),
        staleTime: 1000 * 60 * 30, // 30 daqiqa davomida ma'lumot yangi deb hisoblanadi va qayta so'rov yuborilmaydi
        cacheTime: 1000 * 60 * 60, // 1 soat davomida keshda saqlanadi
    });
};
