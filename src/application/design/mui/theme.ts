import { createTheme, ThemeOptions } from "@mui/material";

const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        background: {
            default: "#6c844c",
            paper: "#e1e4bc"
        },
        primary: {
            main: "#d0b474",
            dark: "#edca61",
            light: "#ecce9a",
        },
        secondary: {
            main: "#5a4b2a",
            dark: "#664a1e",
            light: "#ae8a50",
        },
        info: {
            main: "#c74213",
            light: "#c82b0d",
            dark: "#981e09"
        },
        error: {
            main: "#c82b0d"
        },
        text: {
            primary: "#fcecdc",
        }
    },
    spacing: (factor: number) => `${factor}rem`,
    typography: {
        fontFamily: ['Ibarra Real Nova'].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: "#5e3923"
                }
            }
        }
    }
}

export const theme = createTheme(lightTheme)
