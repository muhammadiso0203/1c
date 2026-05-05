import token from "../../../../config/config"
import type { IDashboard } from "../../interface/interface"
import { useQuery } from "@tanstack/react-query"

export const useStat = () => {
    return useQuery({
        queryKey: ["stats"],
        queryFn: () => token.get<IDashboard[]>("/users/stats").then((res) => res.data),
    })
}