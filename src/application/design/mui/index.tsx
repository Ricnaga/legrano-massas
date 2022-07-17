import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider as MaterialUIProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

type MuiProviderProps = {
    children: ReactNode
}

export function MuiProvider({ children }: MuiProviderProps) {
    return (
        <MaterialUIProvider theme={theme}>
            <EmotionProvider theme={theme}>
                <CssBaseline />
                {children}
            </EmotionProvider>
        </MaterialUIProvider>
    )
}