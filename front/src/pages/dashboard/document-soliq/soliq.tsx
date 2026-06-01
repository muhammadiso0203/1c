
import { FileText, FileCheck, Clock, AlertTriangle } from "lucide-react";
import { soliqData } from "./service/getSoliqData";
import StatsCards from "@/components/dashboard/StatsCards";
import SoliqDocumentsChart from "@/components/charts/SoliqDocumentsChart";
import SoliqDocumentTypeChart from "@/components/charts/SoliqDocumentTypeChart";

const iconMap = {
  "Создано за месяц": FileText,
  "Зарегистрировано": FileCheck,
  "В обработке": Clock,
  "Требуют внимания": AlertTriangle,
};

const Soliq = () => {
  const { data, isLoading } = soliqData();

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc || "",
    icon: iconMap[item.name as keyof typeof iconMap] || FileText,
  }));

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={mappedStats} isLoading={isLoading} />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SoliqDocumentsChart />
        <SoliqDocumentTypeChart />
      </div>
    </>
  );
};

export default Soliq;