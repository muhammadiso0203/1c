import token from "@/config/config"
import { useQuery } from "@tanstack/react-query"
import type { IFinance } from "../../interface/interface"


export const useFinanceData = () => {
    return useQuery({
        queryKey: ['financeData'],
        queryFn:() => token.get<IFinance[]>('/users/financeStat').then((res) => Array.isArray(res.data) ? res.data : [])
    })
}