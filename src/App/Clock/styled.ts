import styled from "styled-components";

export const StyledClock = styled.p`
    text-align: right;
    font-family: monospace;
    font-size: 12px;
    color:${({theme}) => theme.colors.doveGray};
`;