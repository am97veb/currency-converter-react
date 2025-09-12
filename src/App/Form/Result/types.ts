import { CalculationResult } from "../../types";

export interface ResultProps {
  currencyName: string;
  amountValue: string;
  result: CalculationResult | null;
  calculation: (currencyName: string, amountValue: string) => void;
  resultReset: () => void;
};