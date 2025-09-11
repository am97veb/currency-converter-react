import styled from "styled-components";

export const ResultText = styled.span`
    margin: 0 5px 0 10px;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.wildSand};
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px;
    font-weight: bold;
    border: none;

    &:hover {
    background-color:${({theme}) => theme.colors.mineShaft};
    }

    &:active {
    background-color:${({theme}) => theme.colors.doveGray};
    }
`;