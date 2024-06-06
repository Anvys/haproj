/* eslint-disable react/jsx-props-no-spreading, react/button-has-type */
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
    COLLAPSER = 'collapser',
    OUTLINE = 'outline',
    OUTLINE_FILLED = 'outlineFilled',
    OUTLINE_FILLED_INVERTED = 'outlineFilledInverted',
}
export enum EButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: EButtonTheme
    size?: EButtonSize
    isSquare?: boolean
    className?: string
    children?: ReactNode
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        theme = EButtonTheme.CLEAR,
        isSquare = false,
        size = EButtonSize.M,
        children,
        type = 'button',
        ...attrs
    } = props;
    return (
        <button
            type={type}
            {...attrs}
            className={cn(
                cls.Button,
                { [cls.square]: isSquare },
                [className, cls[theme], cls[size]],
            )}
        >
            {children}
        </button>
    );
};
/* eslint-enable react/jsx-props-no-spreading */
