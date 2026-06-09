import { BarChart2, AlertCircle, Award, Landmark } from "lucide-react";
import { useGetRaschet } from "./service/useRaschet";
import StatsCards from "@/components/dashboard/StatsCards";
import AssetsLiabilitiesComparisonChart from "@/components/charts/AssetsLiabilitiesComparisonChart";
import IfrsNetProfitDynamicsChart from "@/components/charts/IfrsNetProfitDynamicsChart";
import NasToIfrsAdjustmentsTable from "@/components/dashboard/NasToIfrsAdjustmentsTable";

const iconMap = {
  "Активы по МСФО": Landmark,
  "Обязательства по МСФО": AlertCircle,
  "Капитал по МСФО": Award,
  "Чистая прибыль (МСФО)": BarChart2,
};

const Raschet = () => {
  const { data, isLoading } = useGetRaschet();

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
        <AssetsLiabilitiesComparisonChart />
        <IfrsNetProfitDynamicsChart />
      </div>
      <div className="mt-5">
        <NasToIfrsAdjustmentsTable />
      </div>
    </>
  );
};

export default Raschet;