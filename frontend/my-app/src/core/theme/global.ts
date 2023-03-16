import { createGlobalStyle } from "styled-components";
import { device } from "../../display/screensize";

const GlobalStyle = createGlobalStyle`

    body {
        font-size: ${props => props.theme.size(2) + 2}px;
        font-family: ${props => props.theme.typography.body};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.typography.heading};
    }

`

export default GlobalStyle