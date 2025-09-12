import { useEffect } from "react";
import { ResultProps } from "../../types";
import { Button, ResultText } from "./styled";

const Result = ({amountValue, result, currencyName, calculation, resultReset}: ResultProps) => {

  useEffect(() => {
    resultReset();
  }, [amountValue]);

  return (
    <>
      <p>
        Wynik:
        <ResultText>
          {result === null ? (
            "brak"
          ) : (
            <>
              {result.calculationResult.toFixed(2)}&nbsp;
              {result.currencyName}
            </>
          )}
        </ResultText>
      </p>
      <Button
        onClick={() =>
          amountValue === "" || amountValue < "1"
            ? result === null
            : calculation(currencyName, amountValue)
        }
      >
        Przelicz
      </Button>
    </>
  );
};
export default Result;