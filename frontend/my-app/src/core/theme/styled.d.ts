import 'styled-components'; // import original module declaration

// and extend them!
declare module 'styled-components' {

    interface ThemeMode {
        color1: string
        color2: string
        color3: string
        color4: string
    }

    export interface DefaultTheme {
        size: (value: number) => number
        typography: {
            heading: string
            body: string
        }
        themode: ThemeMode 
    }
    
    export interface invertedTheme{
        size: (value: number) => number
        typography: {
            heading: string
            body: string
        }
        themode: ThemeMode
    }
}