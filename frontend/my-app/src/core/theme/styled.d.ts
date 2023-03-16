import 'styled-components'; // import original module declaration

// and extend them!
declare module 'styled-components' {

    interface ThemeMode {
        primary: string
        onPrimary: string
        primaryContainer: string
        onPrimaryContainer: string
        secondary: string
        onSecondary: string
        secondaryContainer: string
        onSecondaryContainer: string
        tertiary: string
        onTertiary: string
        tertiaryContainer: string
        onTertiaryContainer: string
        error: string
        onError: string
        errorContainer: string
        onErrorContainer: string
        background: string
        onBackground: string
        surface: string
        onSurface: string
        surfaceVariant: string
        onSurfaceVariant: string
        outline: string
        inverseOnSurface: string
        inverseSurface: string
        inversePrimary: string
        shadow: string
        surfaceTint: string
        outlineVariant: string
        scrim: string
    }

    export interface DefaultTheme {
        size: (value: number) => number
        typography: {
            heading: string
            body: string
        }
        themode: ThemeMode
        img: any
    }

    export interface invertedTheme{
        size: (value: number) => number
        typography: {
            heading: string
            body: string
        }
        themode: ThemeMode
        img: any
    }
}
