import { useState, useEffect } from 'react';

function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    // Default to dark mode if no preference is stored
    return 'dark';
}

export function useDarkMode() {
    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Apply dark mode immediately on mount if no preference is stored
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (!stored) {
            const root = document.documentElement;
            root.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            const stored = localStorage.getItem('theme');
            // Only update if no preference is stored, defaulting to dark
            if (!stored) setTheme('dark');
        };
        mql.addEventListener?.('change', handler);
        return () => mql.removeEventListener?.('change', handler);
    }, []);

    const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    return { theme, toggle, setTheme };
}

