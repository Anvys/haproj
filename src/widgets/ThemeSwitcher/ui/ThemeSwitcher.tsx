import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitchProps {
    className?: string
    // children?: React.ReactNode
}

export const ThemeSwitcher: FC<IThemeSwitchProps> = (props) => {
    const { className } = props;
    const { theme, doToggleTheme } = useTheme();
    const { t } = useTranslation();
    return (
        <div
            className={cn(cls.ThemeSwitch, { active: theme === 'light' }, [className])}
            onClick={doToggleTheme}
        >
            {t('Тема')}
            {/* <div className={cn(cls.sw_item, { active: theme === 'light', inactive: theme === 'dark' })} /> */}
            {/* <div className={cn(cls.sw_item, { active: theme === 'dark', inactive: theme === 'light' })} /> */}
        </div>
    );
};
