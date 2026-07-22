import { Users, UserPlus, UserMinus, Percent } from "lucide-react";
import { useMetrics } from "@/pages/dashboard/abzor/service/useMetrics";
import StatsCards from "@/components/dashboard/StatsCards";
import StaffCountDynamicsChart from "@/components/charts/StaffCountDynamicsChart";
import StaffAgeCompositionChart from "@/components/charts/StaffAgeCompositionChart";
import NewHiresTable from "@/components/dashboard/NewHiresTable";

const Kadri = () => {
  const { data, isLoading } = useMetrics();

  const employeeStats = [
    {
      title: "Всего сотрудников",
      value: data ? `${data?.Totalemployees?.toLocaleString() ?? "0"} чел.` : "",
      trend: data?.Totalemployeeschange != null
        ? (data.Totalemployeeschange > 0 
            ? `+${data.Totalemployeeschange}% по сравнению с прошлым периодом` 
            : data.Totalemployeeschange < 0 
              ? `${data.Totalemployeeschange}% по сравнению с прошлым периодом` 
              : 'Ўзгармади')
        : "",
      icon: Users,
    },
    {
      title: "Принято за месяц",
      value: "45 чел.",
      trend: "+15% к прошлому мес.",
      icon: UserPlus,
    },
    {
      title: "Уволено за месяц",
      value: "12 чел.",
      trend: "В пределах текучести",
      icon: UserMinus,
    },
    {
      title: "Открытых вакансий",
      value: "1.8%",
      trend: "Ниже целевого (2.5%)",
      icon: Percent,
    },
  ];

  return (
    <>
      <div className="mt-5">
        <StatsCards stats={employeeStats} isLoading={isLoading} />
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
