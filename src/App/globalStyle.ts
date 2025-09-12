import { createGlobalStyle } from "styled-components";
import CCwallpaper from "./CCwallpaper.jpg";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  button {
    cursor: pointer;
  }

  body {
    background-image: url(${CCwallpaper});
    background-size: cover;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color:${({theme}) => theme.colors.black};
  }
`;