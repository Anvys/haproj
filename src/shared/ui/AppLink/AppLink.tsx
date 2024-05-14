import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import cls2 from './AppLink.module.scss';
import * as cls from './AppLink.module.scss';

console.error('DEFAULT IMPORT CLASS NAME: ', cls2);

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
