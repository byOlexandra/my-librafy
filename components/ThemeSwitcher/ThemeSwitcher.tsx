"use client";

import { useThemeContext } from "@/hooks/useThemeContext";
import css from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useThemeContext();

    const handleThemeChange = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        document.body.dataset.theme = nextTheme;
        setTheme(nextTheme);
    };

    return (
        <button type="button" onClick={handleThemeChange} className={css.themeBtn}>
            <svg
                width="20"
                height="20"
                className={`moon-icon ${css.themeIcon}`}
                aria-label="Toggle theme"
            >
                <use href="/sprite.svg#icon-moon"></use>
            </svg>
            <svg
                width="20"
                height="20"
                className={`sun-icon ${css.themeIcon}`}
                aria-label="Toggle theme"
            >
                <use href="/sprite.svg#icon-sun"></use>
            </svg>
        </button>
    );
}
