import { DefaultTheme } from "styled-components";
import "@fontsource/roboto";

const theme : DefaultTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    themode: {
        color1: '#457CF6',
        color2: '#FFAB2F',
        color3: '#C1C1C1',
        color4: '#F2F2F2',
    }
}

export default theme