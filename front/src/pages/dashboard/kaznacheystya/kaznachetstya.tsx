import { Landmark, FileText, CheckCircle2, DollarSign } from "lucide-react";
import { useGetKaznacheystya } from "./service/useKaznacheystya";
import StatsCards from "@/components/dashboard/StatsCards";
import ApplicationsByApprovalStatusChart from "@/components/charts/ApplicationsByApprovalStatusChart";
import PlannedPaymentsWeeklyChart from "@/components/charts/PlannedPaymentsWeeklyChart";
import PaymentRegistryTodayTable from "@/components/dashboard/PaymentRegistryTodayTable";

const iconMap = {
  "Всего заявок": FileText,
  "Согласовано": CheckCircle2,
  "На рассмотрении": Landmark,
  "Оплачено": DollarSign,
};

const Kaznachetstya = () => {
  const { data, isLoading } = useGetKaznacheystya();

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
        <ApplicationsByApprovalStatusChart />
        <PlannedPaymentsWeeklyChart />
      </div>
      <div className="mt-5">
        <PaymentRegistryTodayTable />
      </div>
    </>
  );
};

export default Kaznachetstya;