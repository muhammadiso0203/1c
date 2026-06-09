import { Banknote, CheckCircle, Percent, Coins } from "lucide-react";
import { useGetZarplata } from "./service/useZarplata";
import StatsCards from "@/components/dashboard/StatsCards";
import PayrollFundDynamicsChart from "@/components/charts/PayrollFundDynamicsChart";
import AccrualsStructureChart from "@/components/charts/AccrualsStructureChart";
import PayrollByDepartmentsTable from "@/components/dashboard/PayrollByDepartmentsTable";

const iconMap = {
  "Фонд оплаты труда": Banknote,
  "Выплачено": CheckCircle,
  "Налоги с ФОТ": Coins,
  "Средняя зарплата": Percent,
};

const Zarplata = () => {
  const { data, isLoading } = useGetZarplata();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc || "",
    icon: iconMap[item.name as keyof typeof iconMap] || Banknote,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PayrollFundDynamicsChart />
        <AccrualsStructureChart />
      </div>
      <div className="mt-5">
        <PayrollByDepartmentsTable />
      </div>
    </>
  );
};

export default Zarplata;