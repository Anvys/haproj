import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum EThemeText{
    PRIMARY = 'primary',
    ERROR = 'error',
    TEXTONLY = 'textonly'
}
export type TTextJustify = 'center' | 'right' | 'left'
interface ITextProps {
    title?: string;
    text?: string;
    theme?: EThemeText
    justify?: TTextJustify
    className?: string
}

export const Text: FC<ITextProps> = (props) => {
    const {
        className,
        title,
        text,
        justify = 'left',
        theme = EThemeText.PRIMARY,
    } = props;
    return (
        <div className={cn(cls.Text, {}, [className, theme, cls[justify]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
