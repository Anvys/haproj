/* eslint-disable no-restricted-globals */
import { FC, useMemo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/SideBar/model/items';
import cls from './SideBar.module.scss';
import { SideBarItem } from '../SideBarItem/SideBarItem';

interface ISideBarProps {
    className?: string
    // children?: React.ReactNode
}

export const SideBar: FC<ISideBarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(() => false);

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SideBarItem
            item={item}
            isCollapsed={collapsed}
            key={item.path}
            isActive={location?.pathname === item.path}
        />
        // eslint-disable-next-line react-hooks/exhaustive-deps
    )), [collapsed, location?.pathname]);
    return (
        <div className={cn(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <Button theme={EButtonTheme.COLLAPSER} onClick={() => setCollapsed((a) => !a)}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
        </div>
    );
};
/* eslint-enable no-restricted-globals */
