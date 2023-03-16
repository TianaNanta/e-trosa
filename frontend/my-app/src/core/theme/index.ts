import { DefaultTheme } from "styled-components";
import "@fontsource/roboto";
import lightmode from "../../assets/images/lightmode.jpg";
import "../googlematerial/colors/light.scss";

const LightTheme : DefaultTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    themode: {
        primary: `#006494`,
        onPrimary: `#ffffff`,
        primaryContainer: `#cae6ff`,
        onPrimaryContainer: `#001e30`,
        secondary: `#755b00`,
        onSecondary: `#ffffff`,
        secondaryContainer: `#ffe08f`,
        onSecondaryContainer: `#241a00`,
        tertiary: `#006874`,
        onTertiary: `#ffffff`,
        tertiaryContainer: `#97f0ff`,
        onTertiaryContainer: `#001f24`,
        error: `#ba1a1a`,
        errorContainer: `#ffdad6`,
        onError: `#ffffff`,
        onErrorContainer: `#410002`,
        background: `#f8fdff`,
        onBackground: `#001f25`,
        surface: `#f8fdff`,
        onSurface: `#001f25`,
        surfaceVariant: `#dde3ea`,
        onSurfaceVariant: `#41474d`,
        outline: `#72787e`,
        inverseOnSurface: `#d6f6ff`,
        inverseSurface: `#00363f`,
        inversePrimary: `#8ecdff`,
        shadow: `#000000`,
        surfaceTint: `#006494`,
        outlineVariant: `#c1c7ce`,
        scrim: `#000000`,
    },
    img: lightmode,
}

export default LightTheme
