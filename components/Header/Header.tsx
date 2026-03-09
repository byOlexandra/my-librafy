'use client'

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import css from './Header.module.css'
import Link from "next/link";

export default function Header() {
    return (
        <header className={css.header}>
            <Link href="/" aria-label="Home" id="logo" className={css.logo}>
                <span className={css.logoSpan}>My</span> Librafy.
            </Link>
            <nav className={css.nav}>
                <ul className={css.list}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/library">Library</Link>
                    </li>
                    <li>
                        <Link href="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <ThemeSwitcher />
        </header>
    )
}