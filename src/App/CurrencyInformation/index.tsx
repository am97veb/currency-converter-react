import { CurrencyInformationProps } from "./types";
import { StyledInformation, SideInformation } from "./styled";

const CurrencyInformation = ({dataState}: CurrencyInformationProps) => {
     
    if (dataState.status !== "success") {
      return null;
    }
    const currencyDate = Object.values(dataState.currencyData.meta)[0];
    const newDate = new Date(currencyDate);

    return (
        <>
            <StyledInformation>
                Kursy walut pochodzą ze strony
                {" "}
                <a target="_blank" rel="noreferrer noopener" href="https://currencyapi.com/">currencyapi.com</a>*
                {" "}
                i&nbsp;są&nbsp;aktualne&nbsp;na&nbsp;dzień
                {" "}
                {newDate.toLocaleDateString(undefined, { month: "long", year: "numeric", day: "numeric" })}
                &nbsp;roku.
            </StyledInformation>
            <SideInformation>
                *strona otwiera się w nowej karcie.
            </SideInformation>
        </>
    );
};

export default CurrencyInformation;