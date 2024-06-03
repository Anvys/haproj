import { RouteProps } from 'react-router-dom';
import { WelcomePage } from 'pages/WelcomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum EAppRoutes {
    WELCOME = 'welcome',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.WELCOME]: '/welcome',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
    [EAppRoutes.WELCOME]: {
        path: RoutePath.welcome,
        element: <WelcomePage />,
    },
    [EAppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
