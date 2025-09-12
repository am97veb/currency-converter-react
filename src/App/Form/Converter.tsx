import { ConverterProps } from "./types";
import { FormField, LabelText } from "./styled";

export const Converter = ({ currencyName, setCurrency, dataState, amountValue, setAmount, resultComponent, currencyInformation }: ConverterProps) => {
    
    if (dataState.status !== "success") {
        return null
    }
    const currencyData = dataState.currencyData.data;
    
    return (
    <>
        <p>
            <label>
                <LabelText>
                    Waluta:
                </LabelText>
                <FormField
                    value={currencyName}
                    onChange={(event) => setCurrency(event.target.value)}
                >
                    {Object.keys(currencyData).map(currency => (
                        <option key={currency}>{currency}</option>
                    ))}
                </FormField>
            </label>
        </p>
        <p>
            <label>
                <LabelText>
                    Kwota do przeliczenia:
                </LabelText>
                <FormField
                    value={amountValue}
                    onChange={(event) => setAmount(event.target.value)}
                    as="input"
                    name="amount"
                    type="number"
                    min="1"
                    step="any"
                    placeholder="PLN"
                    required
                />
            </label>
        </p>
        {resultComponent}
        {currencyInformation}
    </>
);}