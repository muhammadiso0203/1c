import { Activity, DollarSign, TrendingUp } from "lucide-react"
import { getPolucheniya } from "./service/usePolucheniya"
import StatsCards from "@/components/dashboard/StatsCards"
import PurchaseSaleDynamicsChart from "@/components/charts/PurchaseSaleDynamicsChart"
import SupplierStructureChart from "@/components/charts/SupplierStructureChart"

const iconMap ={
  "Закуплено за месяц": DollarSign,
  "Реализовано": TrendingUp,
  "Общая стоимость": DollarSign,
  "Активных контрактов": Activity
}

const Polucheniya = () => {
  const { data, isLoading } = getPolucheniya()

  const mappedStats = data?.map((item) => ({
    title: item.name,
    value: item.value,
    trend: item.desc,
    icon: iconMap[item.name as keyof typeof iconMap] || DollarSign,
  }));

  return (
    <>
    <div className="mt-5">
      <StatsCards stats={mappedStats} isLoading={isLoading}/>
    </div>
    <div className="mt-6 grid grid-cols-2 gap-6">
      <PurchaseSaleDynamicsChart />
      <SupplierStructureChart />
    </div>
    </>
  )
}

export default Polucheniya