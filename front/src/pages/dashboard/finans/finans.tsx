import { DollarSign, TrendingUp, TrendingDown, ChartPie } from "lucide-react";
import StatsCards from "../../../components/dashboard/StatsCards";
import { useFinanceData } from "./service/useFinanceData";
import FinanceDynamicsChart from "../../../components/charts/FinanceDynamicsChart";
import ExpenseStructureChart from "@/components/charts/ExpenseStructureChart";
import CashFlowWeeklyChart from "@/components/charts/CashFlowWeeklyChart";
import KeyFinanceIndicators from "@/components/dashboard/KeyFinanceIndicators";
import FinancialGoals from "@/components/dashboard/FinancialGoals";
import FinancialForecast from "@/components/dashboard/FinancialForecast";

const iconMap = {
  "Общая выручка": DollarSign,
  "Чистая прибыль": TrendingUp,
  "Операционные расходы": TrendingDown,
  "Рентабельность": ChartPie,
};

const Finans = () => {
  const { data, isLoading } = useFinanceData();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc,
    icon: iconMap[item.name as keyof typeof iconMap] || DollarSign,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5">
        <FinanceDynamicsChart />
        <ExpenseStructureChart/>
      </div>
      <div className="mt-8">
        <CashFlowWeeklyChart/>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-5">
        <KeyFinanceIndicators/>
        <FinancialGoals/>
      </div>
      <div className="mt-8">
        <FinancialForecast/>
      </div>
    </>
  );

};

export default Finans;