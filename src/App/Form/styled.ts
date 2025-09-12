import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10% auto;
    max-width: 600px; 
    padding: 20px;
`;

export const FormFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.mercury};
    box-shadow: 5px 5px 14px -3px ${({theme}) => theme.colors.black};;
    padding: 0 30px;
`; 

export const FormLegend = styled.legend`
    background-color: ${({theme}) => theme.colors.black};;
    border-radius: 10px;
    padding: 10px;
    color: whitesmoke;
`;

export const LabelText = styled.span`
    width: 200px;
    display: inline-block;
`;

export const FormField = styled.select`
    border-radius: 10px;
    width: 200px;
    padding: 5px;
`;

export const LoadingText = styled.p`
    text-align: center;
    margin: 10%;
    color:${({theme}) => theme.colors.tangaroa};
`;

export const Imagin = styled.img`
    width: 100px;
    height: 100px;
    margin: 0 auto 30px;
`;

export const ErrorText = styled(LoadingText)`
    text-align: center;
    margin: 10%;
    color:${({theme}) => theme.colors.monza};
`;