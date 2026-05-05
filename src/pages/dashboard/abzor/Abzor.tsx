import { Activity, Loader2 } from "lucide-react"
import FinancialChart from "../../../components/charts/financialChart"
import ExpenseChart from "../../../components/charts/struktursChart"
import EfficiencyChart from "../../../components/charts/operatsionniyChart"
import SimpleDashboardChart from "../../../components/charts/personalChart"
import OperationsByModuleChart from "../../../components/charts/operationsByModuleChart"
import ModuleIndicatorsChart from "../../../components/charts/moduleIndicatorsChart"
import ErpEfficiencyChart from "../../../components/charts/erpEfficiencyChart"
import ModuleSummaryCards from "../../../components/dashboard/ModuleSummaryCards"
import StatsCards from "../../../components/dashboard/StatsCards"
import UzbekistanInteractiveMap from "../../../components/dashboard/UzbekistanInteractiveMap"
import { useMetrics } from "./service/useMetrics"


const Abzor = () => {
  const { data, isLoading } = useMetrics();
  return (
    <>
      <div className="w-full bg-blue-700 dark:bg-blue-700 rounded-[12px] p-6 text-white transition-colors duration-300">
        {isLoading && (
          <div className="w-full flex items-center justify-center py-4">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}

        <div className="grid grid-cols-4 gap-8">
          {data?.map((dashboard, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-blue-100 text-[14px] font-medium">
                {dashboard.label}
              </p>
              <h2 className="text-3xl font-semibold">
                {dashboard.value}
              </h2>
              <p className="text-blue-100 text-[12px]">
                {dashboard.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <StatsCards />

      <div className="w-full mt-9">
        <UzbekistanInteractiveMap />
      </div>


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