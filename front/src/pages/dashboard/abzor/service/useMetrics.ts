import { useQuery } from "@tanstack/react-query";
import token from "../../../../config/config";
import type { IMetrics } from "../../interface/interface";

export const useMetrics = () => {
    return useQuery({
        queryKey: ["dashboards"],
        queryFn: () => token.get<IMetrics[]>("/users/dashboards").then((res) => Array.isArray(res.data) ? res.data : []),
    })
}
