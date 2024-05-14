import { useContext } from 'react';
import { ETheme, LS_THEME_KEY, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

type TUseThemeResult = {
    theme: ETheme
    doToggleTheme: () => void
}
export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const doToggleTheme = () => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LS_THEME_KEY, newTheme);
    };

    return { theme, doToggleTheme };
};
