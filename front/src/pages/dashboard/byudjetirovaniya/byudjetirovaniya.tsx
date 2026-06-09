import { Calculator, CheckSquare, Percent, AlertCircle } from "lucide-react";
import { useGetByudjetirovaniya } from "./service/useByudjetirovaniya";
import StatsCards from "@/components/dashboard/StatsCards";
import BudgetExecutionByCategoriesChart from "@/components/charts/BudgetExecutionByCategoriesChart";
import MonthlyBudgetExecutionDynamicsChart from "@/components/charts/MonthlyBudgetExecutionDynamicsChart";
import LimitExceededTable from "@/components/dashboard/LimitExceededTable";

const iconMap = {
  "Плановый бюджет": Calculator,
  "Исполнено": CheckSquare,
  "Процент исполнения": Percent,
  "Остаток лимита": AlertCircle,
};

const Byudjetirovaniya = () => {
  const { data, isLoading } = useGetByudjetirovaniya();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc || "",
    icon: iconMap[item.name as keyof typeof iconMap] || Calculator,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetExecutionByCategoriesChart />
        <MonthlyBudgetExecutionDynamicsChart />
      </div>
      <div className="mt-5">
        <LimitExceededTable />
      </div>
    </>
  );
};

export default Byudjetirovaniya;