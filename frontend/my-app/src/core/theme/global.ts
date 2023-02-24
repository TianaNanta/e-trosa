import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        font-size: ${props => props.theme.size(2) + 2}px;
        font-family: ${props => props.theme.typography.body};
        /* background-color : ${props =>props.theme.themode.color1}; */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.typography.heading};
    }

`

export default GlobalStyle