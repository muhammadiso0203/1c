import token from "@/config/config";
import { useQuery } from "@tanstack/react-query";
import type { ISoliqData } from "../../interface/interface";

export const soliqData = () => {
    return useQuery<ISoliqData[]>({
        queryKey: ["soliq-data"],
        queryFn: () => token.get('/users/soliqStat').then((res) => res.data)
    })
}