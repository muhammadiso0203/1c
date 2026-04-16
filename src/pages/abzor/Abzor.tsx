import { Activity, DollarSign, TrendingUp, Users } from "lucide-react"
import FinancialChart from "../../components/charts/financialChart"
import ExpenseChart from "../../components/charts/struktursChart"

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
    number: "47 млн сум",
    desc: "За текущий квартал"
  }
]

const Abzor = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Общий обзор ERP-системы 1С</h1>
        <p className="text-gray-700 text-[14px]">Сводная панель по всем модулям системы - актуальные показатели на 14 апреля 2026</p>
      </div>
      <div className="w-full bg-blue-600 rounded-[12px] mt-5 p-6 text-white shadow-lg">
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
      <div className="w-full grid grid-cols-4 gap-9">
        <div className="w-90 h-35 border border-gray-200 rounded-[10px] mt-5 flex  justify-between p-6 bg-white">
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-gray-500 mb-1">Общая выручка</p>
            <div className="flex items-baseline gap-1.5">
              <h1 className="text-[32px]">1,935 млн сум</h1>
            </div>
            <p className="text-[15px] text-green-600 mt-1">
              +18.2% за полугодие
            </p>
          </div>
          <div className="w-12 h-12 bg-[#f0f5ff] rounded-[10px] flex items-center justify-center">
            <DollarSign className="text-blue-600 w-6 h-6" />
          </div>
        </div>
        <div className="w-90 h-35 border border-gray-200 rounded-[10px] mt-5 flex justify-between p-6 bg-white">
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-gray-500 mb-1">Чистая прибыль</p>
            <h2 className="text-[32px]">749 млн сум</h2>
            <p className="text-[15px] text-green-600 mt-1">+15.7% за полугодие</p>
          </div>
          <div className="w-12 h-12 bg-[#f0f5ff] rounded-[10px] flex items-center justify-center">
            <TrendingUp className="text-blue-600 w-6 h-6" />
          </div>
        </div>
        <div className="w-90 h-35 border border-gray-200 rounded-[10px] mt-5 flex justify-between p-6 bg-white">
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-gray-500 mb-1">Всего сотрудников</p>
            <h2 className="text-[32px]">1,247</h2>
            <p className="text-[15px] text-green-600 mt-1">+4.0% за полугодие</p>
          </div>
          <div className="w-12 h-12 bg-[#f0f5ff] rounded-[10px] flex items-center justify-center">
            <Users className="text-blue-600 w-6 h-6" />
          </div>
        </div>
        <div className="w-90 h-35 border border-gray-200 rounded-[10px] mt-5 flex justify-between p-6 bg-white">
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-gray-500 mb-1">Операций обработано</p>
            <h2 className="text-[32px]">58,047</h2>
            <p className="text-[15px] text-green-600 mt-1">За полугодие 2026</p>
          </div>
          <div className="w-12 h-12 bg-[#f0f5ff] rounded-[10px] flex items-center justify-center">
            <Activity className="text-blue-600 w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-9 mt-5">
        <FinancialChart/>
        <ExpenseChart/>
      </div>
    </>
  )
}

export default Abzor