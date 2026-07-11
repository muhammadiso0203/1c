import { useQuery } from "@tanstack/react-query";
import api from "@/config/config";
import type { IMetrics } from "@/pages/dashboard/interface/interface";
import { useDateRange } from "@/context/DateRangeContext";

export const useMetrics = () => {
    const { apiDateFrom, apiDateTo } = useDateRange();

    return useQuery({
        queryKey: ["dashboards", apiDateFrom, apiDateTo],
        queryFn: () =>
            api.post<IMetrics>("/dashboard/totalrevenue", {
                data_nach: apiDateFrom,
                data_kon:  apiDateTo,
                items: [{ ID: 14 }],
            }).then((res) => res.data),
    });
};
