import { FC } from 'react';
import './SimpleThemeSwitch.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { cn } from 'shared/lib/classNames/classNames';

type TProps = {
    // selectedValue: number
    //
    //
    // onChange: (v: number) => void
}
export const SimpleThemeSwitch: FC<TProps> = () => {
    const { theme, doToggleTheme } = useTheme(); // `ThemeSwitch ${selectedValue === 0 ? 'active': 'inactive'}`
    return (
        <div className={cn('ThemeSwitch', { active: theme === 'light' })} onClick={doToggleTheme}>
            <div className={cn('sw_item', { active: theme === 'light', inactive: theme === 'dark' })} />
            <div className={cn('sw_item', { active: theme === 'dark', inactive: theme === 'light' })} />
        </div>
    );
};
