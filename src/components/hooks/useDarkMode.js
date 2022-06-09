import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === 'dark');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const html = window.document.documentElement;

        const prevMode = isDarkMode ? 'light' : 'dark';
        html.classList.remove(prevMode);

        const nextMode = isDarkMode ? 'dark' : 'light';
        html.classList.add(nextMode);

        localStorage.setItem('theme', nextMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={[isDarkMode, toggleDarkMode]}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useDarkMode = () => {
    return useContext(ThemeContext);
}

export default ThemeContextProvider;
