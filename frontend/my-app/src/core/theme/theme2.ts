import { invertedTheme } from "styled-components";
import "@fontsource/roboto";

export const DarkTheme : invertedTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    themode: {
        color1: '#A5BFF8',
        color2: '#3F8182',
        color3: '#999999',
        color4: '#F2F2F2',
    }

}

export default DarkTheme