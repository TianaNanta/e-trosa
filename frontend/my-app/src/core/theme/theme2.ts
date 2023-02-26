import { invertedTheme } from "styled-components";
import "@fontsource/roboto";
import darkmode from "../../assets/images/darkmode.jpg";
import "../googlematerial/colors/dark.scss";

export const DarkTheme : invertedTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    themode: {
        primary: `$primary-dark`,
        onPrimary: `$on-primary-dark`,
        primaryContainer: `$primary-container-dark`,
        onPrimaryContainer: `$on-primary-container-dark`,
        secondary: `$secondary-dark`,
        onSecondary: `$on-secondary-dark`,
        secondaryContainer: `$secondary-container-dark`,
        onSecondaryContainer: `$on-secondary-container-dark`,
        tertiary: `$tertiary-dark`,
        onTertiary: `$on-tertiary-dark`,
        tertiaryContainer: `$tertiary-container-dark`,
        onTertiaryContainer: `$on-tertiary-container-dark`,
        error: `$error-dark`,
        onError: `$on-error-dark`,
        errorContainer: `$error-container-dark`,
        onErrorContainer: `$on-error-container-dark`,
        background: `$background-dark`,
        onBackground: `$on-background-dark`,
        surface: `$surface-dark`,
        onSurface: `$on-surface-dark`,
        surfaceVariant: `$surface-variant-dark`,
        onSurfaceVariant: `$on-surface-variant-dark`,
        outline: `$outline-dark`,
        inverseOnSurface: `$inverse-on-surface-dark`,
        inverseSurface: `$inverse-surface-dark`,
        inversePrimary: `$inverse-primary-dark`,
        shadow: `$shadow-dark`,
        surfaceTint: `$surface-tint-dark`,
        outlineVariant: `$outline-variant-dark`,
        scrim: `$scrim-dark`,
    },
    img: darkmode,

}

export default DarkTheme