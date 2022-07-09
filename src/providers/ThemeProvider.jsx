import React, { useContext, useEffect, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeToggleContext = React.createContext();

export function useThemeToggle() {
    return useContext(ThemeToggleContext);
}

export function getCurrentTheme() {
    const isSystemThemeDark = window.localStorage.getItem('theme') === 'dark' || (!('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return isSystemThemeDark ? 'dark' : 'light' || 'light';
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState();

    function toggleTheme() {
        setTheme(() =>  theme === 'dark' ? 'light' : 'dark');

        // Set theme on local storage
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    }

    function updateSystemDefaultTheme() {
        const isSystemThemeDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        setTheme(() =>  isSystemThemeDark ? 'dark' : 'light');
    }

    useEffect(() => {
        updateSystemDefaultTheme();

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
            updateSystemDefaultTheme();
        });
    }, []);

    // Update theme
    useEffect(() => {
        // HTML
        const htmlNode = document.querySelector('html');

        // Toggle theme
        if(theme === 'dark') {
            htmlNode.classList.add('dark');
        } else {
            htmlNode.classList.remove('dark');
        }
    }, [theme]);

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
    );
}
