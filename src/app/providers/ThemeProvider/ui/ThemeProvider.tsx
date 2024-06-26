import {
    FC, ReactNode, useMemo, useState,
} from 'react';
import {
    EGlobalThemes,
    LS_THEME_KEY,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as EGlobalThemes || EGlobalThemes.LIGHT;

type ThemeProviderProps = {
    initialTheme?: EGlobalThemes
    children?: ReactNode | undefined
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<EGlobalThemes>(() => defaultTheme || initialTheme);

    const defaultValue = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
