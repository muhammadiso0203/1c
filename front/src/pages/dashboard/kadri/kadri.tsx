import { Users, UserPlus, UserMinus, Percent } from "lucide-react";
import { useGetKadri } from "./service/useKadri";
import StatsCards from "@/components/dashboard/StatsCards";
import StaffCountDynamicsChart from "@/components/charts/StaffCountDynamicsChart";
import StaffAgeCompositionChart from "@/components/charts/StaffAgeCompositionChart";
import NewHiresTable from "@/components/dashboard/NewHiresTable";

const iconMap = {
  "Общая численность": Users,
  "Принято за месяц": UserPlus,
  "Уволено за месяц": UserMinus,
  "Текучесть кадров": Percent,
};

const Kadri = () => {
  const { data, isLoading } = useGetKadri();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc || "",
    icon: iconMap[item.name as keyof typeof iconMap] || Users,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaffCountDynamicsChart />
        <StaffAgeCompositionChart />
      </div>
      <div className="mt-5">
        <NewHiresTable />
      </div>
    </>
  );
};

export default Kadri;