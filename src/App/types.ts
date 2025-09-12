import { ReactNode } from "react";

export type DataState =
  | { status: "loading"; currencyData: null }
  | { status: "success"; currencyData: CurrencyData }
  | { status: "error"; currencyData?: null };

export interface CurrencyData {
  data: {
    [key: string]: CurrencyItem;
  };
  meta: {
    lastUpdatedAt: string;
  };
};

export interface CurrencyItem {
  code: string;
  value: number;
};

export interface CalculationResult {
  calculationResult: number;
  currencyName: string;
};