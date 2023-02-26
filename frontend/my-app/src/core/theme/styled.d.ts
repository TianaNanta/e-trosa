import 'styled-components'; // import original module declaration

// and extend them!
declare module 'styled-components' {

    interface ThemeMode {
        primary: string
        primaryText: string
        onPrimary: string
        onPrimaryText: string
        primaryContainer: string
        primaryContainerText: string
        onPrimaryContainer: string
        onPrimaryContainerText: string
        secondary: string
        secondaryText: string
        onSecondary: string
        onSecondaryText: string
        secondaryContainer: string
        secondaryContainerText: string
        onSecondaryContainer: string
        onSecondaryContainerText: string
        tertiary: string
        tertiaryText: string
        onTertiary: string
        onTertiaryText: string
        tertiaryContainer: string
        tertiaryContainerText: string
        onTertiaryContainer: string
        onTertiaryContainerText: string
        error: string
        errorText: string
        onError: string
        onErrorText: string
        errorContainer: string
        errorContainerText: string
        onErrorContainer: string
        onErrorContainerText: string
        background: string
        backgroundText: string
        onBackground: string
        onBackgroundText: string
        surface: string
        surfaceText: string
        onSurface: string
        onSurfaceText: string
        surfaceVariant: string
        surfaceVariantText: string
        onSurfaceVariant: string
        onSurfaceVariantText: string
        outline: string
        outlineText: string
        inverseOnSurface: string
        inverseOnSurfaceText: string
        inverseSurface: string
        inverseSurfaceText: string
        inversePrimary: string
        inversePrimaryText: string
        shadow: string
        shadowText: string
        surfaceTint: string
        surfaceTintText: string
        outlineVariant: string
        outlineVariantText: string
        scrim: string
        scrimText: string
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