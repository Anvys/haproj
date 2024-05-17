import { useContext } from 'react';
import { EGlobalThemes, LS_THEME_KEY, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

type TUseThemeResult = {
    theme: EGlobalThemes
    doToggleTheme: () => void
}
export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const doToggleTheme = () => {
        const newTheme = theme === EGlobalThemes.LIGHT ? EGlobalThemes.DARK : EGlobalThemes.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LS_THEME_KEY, newTheme);
    };

    return { theme, doToggleTheme };
};
