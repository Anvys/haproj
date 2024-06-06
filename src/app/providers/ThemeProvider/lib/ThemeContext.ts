import { createContext } from 'react';

export enum EGlobalThemes{
    LIGHT = 'lightThemeMain',
    DARK= 'darkThemeMain',
}

type TThemeContext = {
    theme: EGlobalThemes
    setTheme: (theme: EGlobalThemes) => void
}

export const ThemeContext = createContext<TThemeContext>({} as TThemeContext);

export const LS_THEME_KEY = 'theme';
