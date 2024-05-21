import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
// import * as cls from './Button.module.scss';
import cls from './Button.module.scss';

export enum EThemeButton {
    CLEAR = 'clear',
    COLLAPSER = 'collapser',
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
        type,
        ...attrs
    } = props;
    // console.log('DEBUG BUTTON:', cls2.Button, cls.Button, className, cls[theme], cn(cls.Button, {}, [className, cls[theme]]));

    return (
        <button
            type="button"
            {...attrs}
            className={`asd${cn(cls.Button, {}, [className, cls[theme]])}`}

        >
            {children}
        </button>
    );
};
