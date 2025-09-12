import { ReactNode } from "react";

export type DataState =
  | { status: "loading"; currencyData: null }
  | { status: "success"; currencyData: CurrencyData }
  | { status: "error"; currencyData?: null };

export interface CurrencyItem {
  code: string;
  value: number;
};

export interface CurrencyData {
  data: {
    [key: string]: CurrencyItem;
  };
  meta: {
    lastUpdatedAt: string;
  };
};

export interface CalculationResult {
  calculationResult: number;
  currencyName: string;
};

export interface ResultProps {
  currencyName: string;
  amountValue: string;
  result: CalculationResult | null;
  calculation: (currencyName: string, amountValue: string) => void;
  resultReset: () => void;
};

export interface ConverterProps
  extends Pick<ResultProps, "currencyName" | "amountValue"> {
  dataState: DataState;
  resultComponent: ReactNode;
  currencyInformation: ReactNode;
  setCurrency: (value: string) => void;
  setAmount: (value: string) => void;
};

export type FormProps = {
  dataState: DataState;
} & Record<
  "clock" | "loadingMessage" | "errorMessage" | "converter",
  ReactNode
>;

export interface CurrencyInformationProps  {
  dataState: DataState;
}