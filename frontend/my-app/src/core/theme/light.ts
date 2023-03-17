import { DefaultTheme } from "styled-components";
import "@fontsource/roboto";

const LightTheme : DefaultTheme = {
    size: (value: number, sizeMultiplicator = 4) => {
        return value * sizeMultiplicator
    },

    typography: {
        heading: {
            fontFamily: 'Roboto, Sans-serif',
            fontWeight: 700,
        }, 
        body: {
            fontFamily: 'Roboto, Sans-serif',
            fontWeight: 400,
        },
    },
    name: 'light-mode',
    colors: {
        primary: '#365ca8',
        onPrimary: '#ffffff',
        primaryContainer: '#d9e2ff',
        OnPrimaryContainer: '#001944',
        secondary: '#855300',
        onSecondary: '#ffffff',
        secondaryContainer: '#ffddb8',
        onSecondaryContainer: '#2a1700',
        tertiary: '#006874',
        onTertiary: '#ffffff',
        tertiaryContainer: '#97f0ff',
        OnTertiaryContainer: '#001f24',
        error: '#ba1a1a',
        onError: '#ffffff',
        errorContainer: '#ffdad6',
        OnErrorContainer: '#410002',
        background: '#f8fdff',
        OnBackground: '#001f25',
        surface: '#f8fdff',
        OnSurface: '#001f25',
        outline: '#757780',
        surfaceVariant: '#e1e2ec',
        OnSurfaceVariant: '#44464f',
    },
}

export default LightTheme
