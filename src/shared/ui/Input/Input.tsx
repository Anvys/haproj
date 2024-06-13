/* eslint-disable react/jsx-props-no-spreading, react/button-has-type */
import {
    ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum EInputTheme {
    PRIMARY= 'primary',
    FILTER= 'filter',
    LOGIN= 'login',
}
interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    theme?: EInputTheme
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    className?: string
}

export const Input: FC<IInputProps> = (props) => {
    const {
        className,
        value,
        onChange,
        theme = EInputTheme.PRIMARY,
        type = 'text',
        autofocus,
        ...rest
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    // const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            // setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        // setIsFocused(false);
    };

    const onFocus = () => {
        // setIsFocused(true);
    };

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cn(cls.Input, {}, [className, cls[theme]])}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};
/* eslint-enable react/jsx-props-no-spreading, react/button-has-type */
