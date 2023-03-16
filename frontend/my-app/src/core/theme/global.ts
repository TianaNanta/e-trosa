import { createGlobalStyle } from "styled-components";
import { device } from "../../display/screensize";

const GlobalStyle = createGlobalStyle`

    body {
        font-family: ${props => props.theme.typography.body};

        @media ${device.MobileS} {
            font-size: ${props => props.theme.size(4) + 2}px;
        }
        @media ${device.MobileM} {
            font-size: ${props => props.theme.size(5) + 2}px;
        }
        @media ${device.MobileL} {
            font-size: ${props => props.theme.size(6) + 2}px;
        }
        @media ${device.Tablet} {
            font-size: ${props => props.theme.size(7) + 2}px;
        }
        @media ${device.Laptop} {
            font-size: ${props => props.theme.size(8) + 2}px;
        }
        @media ${device.LaptopL} {
            font-size: ${props => props.theme.size(9) + 2}px;
        }
        @media ${device.Desktop} {
            font-size: ${props => props.theme.size(10) + 2}px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.typography.heading};
    }

`

export default GlobalStyle
