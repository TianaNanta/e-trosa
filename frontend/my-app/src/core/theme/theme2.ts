import { invertedTheme } from "styled-components";
import "@fontsource/roboto";
import darkmode from "../../assets/images/darkmode.jpg";

export const DarkTheme : invertedTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    themode: {
        primary: `#8ecdff`,
        onPrimary: `#00344f`,
        primaryContainer: `#004b70`,
        onPrimaryContainer: `#cae6ff`,
        secondary: `#ecc248`,
        onSecondary: `#3d2e00`,
        secondaryContainer: `#584400`,
        onSecondaryContainer: `#ffe08f`,
        tertiary: `#4fd8eb`,
        onTertiary: `#00363d`,
        tertiaryContainer: `#004f58`,
        onTertiaryContainer: `#97f0ff`,
        error: `#ffb4ab`,
        onError: `#690005`,
        errorContainer: `#93000a`,
        onErrorContainer: `#ffdad6`,
        background: `#001f25`,
        onBackground: `#a6eeff`,
        surface: `#001f25`,
        onSurface: `#a6eeff`,
        surfaceVariant: `#41474d`,
        onSurfaceVariant: `#c1c7ce`,
        outline: `#8b9198`,
        inverseOnSurface: `#001f25`,
        inverseSurface: `#a6eeff`,
        inversePrimary: `#a6eeff`,
        shadow: `#000000`,
        surfaceTint: `#8ecdff`,
        outlineVariant: `#41474d`,
        scrim: `#000000`,
    },
    img: darkmode,

}

export default DarkTheme
