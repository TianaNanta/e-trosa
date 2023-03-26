import { createGlobalStyle } from "styled-components";
import { device } from "../../display/screensize";

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        font-family: ${props => props.theme.typography.body.fontFamily};
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.name === 'dark-mode' ? 'white' : 'black'};
        font-size: 14px;
        line-height: 22px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-family: ${props => props.theme.typography.heading.fontFamily};
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 46px;
    }

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 40px;
    }

    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }

    h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
    }

    h5 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

`

export default GlobalStyle
