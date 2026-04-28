import { Activity, DollarSign, TrendingUp, Users } from "lucide-react"
import FinancialChart from "../../../components/charts/financialChart"
import ExpenseChart from "../../../components/charts/struktursChart"
import EfficiencyChart from "../../../components/charts/operatsionniyChart"
import SimpleDashboardChart from "../../../components/charts/personalChart"
import OperationsByModuleChart from "../../../components/charts/operationsByModuleChart"
import ModuleIndicatorsChart from "../../../components/charts/moduleIndicatorsChart"
import ErpEfficiencyChart from "../../../components/charts/erpEfficiencyChart"
import ModuleSummaryCards from "../../../components/dashboard/ModuleSummaryCards"
import StatsCards from "../../../components/dashboard/StatsCards"

const statistic = [
  {
    name: "Всего модулей",
    number: "14",
    desc: "Все активны"
  },
  {
    name: "Общая эффективность",
    number: "94.8%",
    desc: "+2.3% к прошлому месяцу"
  },
  {
    name: "Операций за месяц",
    number: "12,847",
    desc: "+15.2% к прошлому месяцу"
  },
  {
    name: "Экономия от автоматизации",
    number: "47 млн sum",
    desc: "За текущий квартал"
  }
]

const dashboardStats = [
  {
    title: "Общая выручка",
    value: "1,935 млн сум",
    trend: "+18.2% за полугодие",
    icon: DollarSign,
  },
  {
    title: "Чистая прибыль",
    value: "749 млн сум",
    trend: "+15.7% за полугодие",
    icon: TrendingUp,
  },
  {
    title: "Всего сотрудников",
    value: "1,247",
    trend: "+4.0% за полугодие",
    icon: Users,
  },
  {
    title: "Операций обработано",
    value: "58,047",
    trend: "За полугодие 2026",
    icon: Activity,
  },
]

const Abzor = () => {
  return (
    <>
      <div className="w-full bg-blue-600 dark:bg-blue-700 rounded-[12px] p-6 text-white shadow-lg transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-blue-100 text-[14px] font-medium">{statistic[0].name}</p>
            <h2 className="text-4xl font-bold my-1">{statistic[0].number}</h2>
            <p className="text-blue-100 text-[12px]">{statistic[0].desc}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-blue-100 text-[14px] font-medium">{statistic[1].name}</p>
            <h2 className="text-4xl font-bold my-1">{statistic[1].number}</h2>
            <p className="text-blue-100 text-[12px]">{statistic[1].desc}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-blue-100 text-[14px] font-medium">{statistic[2].name}</p>
            <h2 className="text-4xl font-bold my-1">{statistic[2].number}</h2>
            <p className="text-blue-100 text-[12px]">{statistic[2].desc}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-blue-100 text-[14px] font-medium">{statistic[3].name}</p>
            <h2 className="text-4xl font-bold my-1">{statistic[3].number}</h2>
            <p className="text-blue-100 text-[12px]">{statistic[3].desc}</p>
          </div>
        </div>
      </div>

      <StatsCards stats={dashboardStats} />



      <div className="w-full grid grid-cols-2 gap-9 mt-5">
        <FinancialChart />
        <ExpenseChart />
      </div>
      <div className="w-full grid grid-cols-2 gap-9 mt-5">
        <EfficiencyChart />
        <SimpleDashboardChart />
      </div>
      <div className="w-full grid grid-cols-2 gap-9 mt-5">
        <OperationsByModuleChart />
        <ModuleIndicatorsChart />
      </div>


      <div className="w-full mt-9">
        <ErpEfficiencyChart />
      </div>
      <div className="w-full mt-9">
        <ModuleSummaryCards />
      </div>

      <div className="w-full bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-slate-700/50 rounded-xl p-6 mt-9 flex gap-4">
        <Activity className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white text-[16px] mb-1">Статус системы</h4>
          <p className="text-gray-600 dark:text-gray-400 text-[13.5px] leading-relaxed">
            Все 14 модулей ERP-системы работают в штатном режиме. Средняя эффективность составляет 94.8%.
            Обработано 12,847 операций за текущий месяц. Автоматизация бизнес-процессов принесла экономию
            47 млн сум за квартал.
          </p>
        </div>
      </div>
    </>
  )
}

export default Abzor