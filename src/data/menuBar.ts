import { LayoutDashboard, Zap } from "lucide-react";
import Abzor from "../pages/dashboard/mdmc/abzor/Abzor";
import Mdmc from "../pages/dashboard/mdmc/Mdmc";

export const menuBar = [
  {
    id: "1",
    name: "Общий обзор",
    icon: LayoutDashboard,
    key: Abzor,
  },
  {
    id: "2",
    name: "Учет электроэнергии АМИ/МДМС",
    icon: Zap,
    key: Mdmc,
  }
];