import { createContext } from 'react';

export enum ETheme{
    LIGHT = 'light',
    DARK= 'dark',
}

type TThemeContext = {
    theme: ETheme
    setTheme: (theme: ETheme) => void
}

export const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

export const LS_THEME_KEY = 'theme';
