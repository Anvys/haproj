import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum ELinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type TAppLinkProps = {
    to: string
    className?: string
    theme?: ELinkTheme
    children?: ReactNode
}
export const AppLink: FC<TAppLinkProps> = ({
    to,
    theme = ELinkTheme.PRIMARY,
    className,
    children,
}) => (
    <Link to={to} className={cn(cls.AppLink, {}, [className, cls[theme]])}>
        {children}
    </Link>
);
