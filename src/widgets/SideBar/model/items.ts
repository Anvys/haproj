import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/sidebar/about.svg';
import WelcomeIcon from 'shared/assets/icons/sidebar/welcome.svg';
import i18n from 'shared/config/i18n/i18n';
// import MainIcon from 'shared/assets/icons/main-20-20.svg';
// import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.welcome,
        Icon: WelcomeIcon,
        text: i18n.t('Главная'),
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: i18n.t('О сайте'),
    },
];
