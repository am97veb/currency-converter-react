import { ReactNode } from "react";
import { DataState } from "../types";
import { ResultProps } from "./Result/types";


export type FormProps = {
  dataState: DataState;
} & Record<
  "clock" | "loadingMessage" | "errorMessage" | "converter",
  ReactNode
>;

export interface ConverterProps
  extends Pick<ResultProps, "currencyName" | "amountValue"> {
  dataState: DataState;
  resultComponent: ReactNode;
  currencyInformation: ReactNode;
  setCurrency: (value: string) => void;
  setAmount: (value: string) => void;
};