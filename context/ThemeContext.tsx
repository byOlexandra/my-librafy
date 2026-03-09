'use client'

import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts';

export type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void,
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface Props {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const saved = document.documentElement.getAttribute('data-theme') as Theme;
            return saved || 'light';
        }
        return 'light';
    });

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        const root = document.documentElement;
        root.setAttribute('data-theme', newTheme);
        root.style.colorScheme = newTheme;
        localStorage.setItem('ui-theme', newTheme);
    };

    return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}