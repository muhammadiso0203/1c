import { useQuery } from "@tanstack/react-query";
import token from "../../../../config/config";
import type { IUsers } from "../../interface/interface";

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => token.get<IUsers[]>("/prisma").then((res) => res.data),
    })
}