import { LayoutDashboard, Zap } from "lucide-react";
import Abzor from "../pages/abzor/Abzor";
import Mdmc from "../pages/mdmc/Mdmc";

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