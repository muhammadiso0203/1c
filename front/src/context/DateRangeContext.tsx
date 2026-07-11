import { createContext, useContext, useState, type ReactNode } from "react";


// DD.MM.YYYY  ←  YYYY-MM-DD
export const toApiDate = (iso: string) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return `${d}.${m}.${y}`;
};

// Standart diapazoni: 2025-yil boshi → oxiri (1C bazada ma'lumotlar bor davr)
export const DEFAULT_FROM = "2025-01-01";
export const DEFAULT_TO   = "2025-12-31";

// ─── Context tipi ──────────────────────────────────────────
interface DateRangeContextType {
    dateFrom: string;     // YYYY-MM-DD (input uchun)
    dateTo:   string;     // YYYY-MM-DD (input uchun)
    setDateFrom: (v: string) => void;
    setDateTo:   (v: string) => void;
    apiDateFrom: string;  // DD.MM.YYYY (API uchun)
    apiDateTo:   string;  // DD.MM.YYYY (API uchun)
    reset: () => void;
}

// ─── Yaratish ──────────────────────────────────────────────
const DateRangeContext = createContext<DateRangeContextType | null>(null);

// ─── Provider ──────────────────────────────────────────────
export const DateRangeProvider = ({ children }: { children: ReactNode }) => {
    const [dateFrom, setDateFrom] = useState(DEFAULT_FROM);
    const [dateTo,   setDateTo]   = useState(DEFAULT_TO);

    const reset = () => {
        setDateFrom(DEFAULT_FROM);
        setDateTo(DEFAULT_TO);
    };

    return (
        <DateRangeContext.Provider value={{
            dateFrom,
            dateTo,
            setDateFrom,
            setDateTo,
            apiDateFrom: toApiDate(dateFrom),
            apiDateTo:   toApiDate(dateTo),
            reset,
        }}>
            {children}
        </DateRangeContext.Provider>
    );
};

// ─── Hook ──────────────────────────────────────────────────
export const useDateRange = () => {
    const ctx = useContext(DateRangeContext);
    if (!ctx) throw new Error("useDateRange must be used inside <DateRangeProvider>");
    return ctx;
};
