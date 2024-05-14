import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';

export enum EThemeButton {
    CLEAR = 'clear',
    COLLAPSER='collapser',
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: EThemeButton
    className?: string
    children?: ReactNode
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        theme = EThemeButton.CLEAR,
        children,
        ...attrs
    } = props;

    return (
        // Тип есть в атрибутах
        // eslint-disable-next-line react/button-has-type
        <button
            {...attrs}
            className={cn(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
