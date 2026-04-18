import Bugxalteriya from "../pages/dashboard/dugxalteriya/bugxalteriya";
import Raschet from "../pages/dashboard/raschet/raschet";
import Byudjetirovaniya from "../pages/dashboard/byudjetirovaniya/byudjetirovaniya";
import Kaznachetstya from "../pages/dashboard/kaznacheystya/kaznachetstya";
import Planirovaniya from "../pages/dashboard/planirovaniya/planirovaniya";
import Kadri from "../pages/dashboard/kadri/kadri";
import Zarplata from "../pages/dashboard/zarplata/zarplata";
import Zakupki from "../pages/dashboard/zakupki/zakupki";
import Sklat from "../pages/dashboard/sklat/sklat";
import { 
  LayoutGrid, 
  Zap, 
  TrendingUp, 
  Banknote, 
  Landmark, 
  Wallet, 
  Users, 
  ShoppingCart, 
  Warehouse,
  FileText,
  Building2,
  Calculator,
  DollarSign
} from "lucide-react";
import Abzor from "../pages/dashboard/abzor/Abzor";
import Mdmc from "../pages/dashboard/mdmc/Mdmc";
import Finans from "../pages/dashboard/finans/finans";
import Polucheniya from "../pages/dashboard/polucheniya/polucheniya";
import Soliq from "../pages/dashboard/document-soliq/soliq";


export const menuBar = [
  {
    id: "1",
    name: "Общий обзор",
    icon: LayoutGrid,
    key: Abzor,
  },
  {
    id: "2",
    name: "Учет электроэнергии АМИ/МДМС",
    icon: Zap,
    key: Mdmc,
  },
  {
    id: "3",
    name: "Финансовые показатели",
    icon: DollarSign,
    key: Finans,
  },
  {
    id: "4",
    name: "Получение/продажа электроэнергии",
    icon: TrendingUp,
    key: Polucheniya,
  },
  {
    id: "5",
    name: "Документы soliq.uz",
    icon: FileText,
    key: Soliq,
  },
  {
    id: "6",
    name: "Централизация бухгалтерии",
    icon: Building2,
    key: Bugxalteriya,
  },
  {
    id: "7",
    name: "Расчет МСФО",
    icon: Calculator,
    key: Raschet,
  },
  {
    id: "8",
    name: "Бюджетирование",
    icon: TrendingUp,
    key: Byudjetirovaniya,
  },
  {
    id: "9",
    name: "Казначейство",
    icon: Landmark,
    key: Kaznachetstya,
  },
  {
    id: "10",
    name: "Планирование ДС",
    icon: Wallet,
    key: Planirovaniya,
  },
  {
    id: "11",
    name: "Кадры",
    icon: Users,
    key: Kadri,
  },
  {
    id: "12",
    name: "Зарплата",
    icon: Banknote,
    key: Zarplata,
  },
  {
    id: "13",
    name: "Закупки",
    icon: ShoppingCart,
    key: Zakupki,
  },
  {
    id: "14",
    name: "Склад",
    icon: Warehouse,
    key: Sklat,
  },

];