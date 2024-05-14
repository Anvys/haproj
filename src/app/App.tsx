import React, { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { NavBar } from 'widgets/NavBar';
import { cn } from 'shared/lib/classNames/classNames';

type TProps = {}
export const App: FC<TProps> = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('App', {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};
