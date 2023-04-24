import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import fontsCss from "./fonts.module.css";

const global = createGlobalStyle`
  ${normalize}
  ${fontsCss}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${(p) => p.theme.colors.backgroundColor};
    color: ${(p) => p.theme.colors.fontColor};
    min-height: 100vh;
  }
  
  a {
    text-decoration: none;
  }
`;

export default global;
