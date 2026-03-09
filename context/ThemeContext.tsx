'use client'

import { createContext, useEffect, useState } from 'react'

export type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface Props {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('ui-theme') as Theme;
            return saved || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem('ui-theme', theme);
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    )
}