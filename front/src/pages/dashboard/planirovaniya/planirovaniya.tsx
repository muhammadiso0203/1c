import { Banknote, TrendingUp, TrendingDown, Landmark } from "lucide-react";
import { useGetPlanirovaniya } from "./service/usePlanirovaniya";
import StatsCards from "@/components/dashboard/StatsCards";
import InflowOutflowDynamicsChart from "@/components/charts/InflowOutflowDynamicsChart";
import OutflowStructureChart from "@/components/charts/OutflowStructureChart";
import LargeTransactionsTable from "@/components/dashboard/LargeTransactionsTable";

const iconMap = {
  "Остаток на начало": Landmark,
  "Поступления": TrendingUp,
  "Выплаты": TrendingDown,
  "Остаток на конец": Banknote,
};

const Planirovaniya = () => {
  const { data, isLoading } = useGetPlanirovaniya();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc || "",
    icon: iconMap[item.name as keyof typeof iconMap] || Landmark,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InflowOutflowDynamicsChart />
        <OutflowStructureChart />
      </div>
      <div className="mt-5">
        <LargeTransactionsTable />
      </div>
    </>
  );
};

export default Planirovaniya;