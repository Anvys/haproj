import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ISidebarItem } from 'widgets/SideBar/model/items';
import { useTranslation } from 'react-i18next';
import cls from './SideBarItem.module.scss';

interface ISideBarItemProps {
    item: ISidebarItem
    isCollapsed: boolean
    isActive?: boolean
    className?: string
}

export const SideBarItem: FC<ISideBarItemProps> = (props) => {
    const {
        item,
        className,
        isActive = false,
        isCollapsed,
    } = props;
    const { t } = useTranslation();
    const mods = {
        [cls.collapsed]: isCollapsed,
        [cls.activeItem]: isActive,
    };
    return (
        <AppLink
            theme={EAppLinkTheme.SECONDARY}
            to={item.path}
            className={cn(cls.SideBarItem, mods, [className])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
