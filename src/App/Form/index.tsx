import { FormEventHandler } from "react";
import { StyledForm, FormFieldset, FormLegend } from "./styled";
import { FormProps } from "./types";

const Form = ({ clock, dataState, loadingMessage, errorMessage, converter }: FormProps) => {
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <FormFieldset>
        <FormLegend>Kalkulator walut</FormLegend>
        {clock}
        {dataState.status === "loading"
          ?  loadingMessage 
          : dataState.status === "error"
          ?  errorMessage 
          :  converter }
      </FormFieldset>
    </StyledForm>
  );
};

export default Form;