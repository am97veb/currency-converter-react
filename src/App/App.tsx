import { useState } from "react";
import { GlobalStyles } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import useCurrencyDownload from "./Form/useCurrencyDownload";
import Form from "./Form";
import Result from "./Form/Result";
import Clock from "./Clock";
import CurrencyInformation from "./CurrencyInformation";
import { LoadingMessage } from "./Form/LoadingMessage";
import { ErrorMessage } from "./Form/ErrorMessage";
import { Converter } from "./Form/Converter";
import { CalculationResult, CurrencyItem, DataState } from "./types";

function App() {
  const [currencyName, setCurrency] = useState("EUR");
  const [amountValue, setAmount] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const dataState: DataState = useCurrencyDownload();

  const calculation = (currencyName: string, amountValue: string) => {
    if (dataState.status !== "success") {
      return;
    }

    const filterNameOnTable: CurrencyItem[] = Object.values(
      dataState.currencyData.data
    ).filter(({ code }: CurrencyItem) => code === currencyName);
    const currencyValue = filterNameOnTable.map(
      ({ value }: CurrencyItem) => value
    );

    setResult({
      calculationResult: parseFloat(amountValue) * currencyValue[0],
      currencyName,
    });
  };

  const resultReset = () => setResult(null);

  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Form
          dataState={dataState}
          clock={<Clock />}
          loadingMessage={<LoadingMessage />}
          errorMessage={<ErrorMessage />}
          converter={
            <Converter
              currencyName={currencyName}
              setCurrency={setCurrency}
              dataState={dataState}
              amountValue={amountValue}
              setAmount={setAmount}
              currencyInformation={
                <CurrencyInformation 
                  dataState={dataState} 
                />
              }
              resultComponent={
                <Result
                  amountValue={amountValue}
                  result={result}
                  currencyName={currencyName}
                  calculation={calculation}
                  resultReset={resultReset}
                />
              }
            />
          }
        />
      </ThemeProvider>
    </main>
  );
}

export default App;