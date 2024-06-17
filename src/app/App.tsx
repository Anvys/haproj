import { FC, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { NavBar } from 'widgets/NavBar';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { userSlice } from 'entities/User';

type TProps = {}
export const App: FC<TProps> = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSlice.actions.checkLocalStorage());
    }, [dispatch]);
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
