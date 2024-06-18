import { RouteProps } from 'react-router-dom';
import { WelcomePage } from 'pages/WelcomePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum EAppRoutes {
    WELCOME = 'welcome',
    ABOUT = 'about',
    CAMERA = 'camera',
    ROUTE_1 = 'route1',
    ROUTE_2 = 'route2',
    ROUTE_3 = 'route3',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
    [EAppRoutes.WELCOME]: '/welcome',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.CAMERA]: '/camera',
    [EAppRoutes.ROUTE_1]: '/route1',
    [EAppRoutes.ROUTE_2]: '/route2',
    [EAppRoutes.ROUTE_3]: '/route3',
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
    [EAppRoutes.CAMERA]: {
        path: RoutePath.camera,
        element: <div>camera</div>,
    },
    [EAppRoutes.ROUTE_1]: {
        path: RoutePath.route1,
        element: <div>route 1</div>,
    },
    [EAppRoutes.ROUTE_2]: {
        path: RoutePath.route2,
        element: <div>route 2</div>,
    },
    [EAppRoutes.ROUTE_3]: {
        path: RoutePath.route3,
        element: <div>route 3</div>,
    },
    [EAppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
