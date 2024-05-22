import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import cls from './SimpleSwitch.module.scss';

interface ISimpleSwitchProps {
    isActive: boolean
    onChange: (v: boolean) => void
    className?: string
    // children?: React.ReactNode
}

export const SimpleSwitch: FC<ISimpleSwitchProps> = (props) => {
    const {
        className,
        isActive,
        onChange,
    } = props;
    return (
        <div
            className={cn(cls.SimpleSwitch, { [cls.active]: isActive }, [className])}
            onClick={() => onChange(!isActive)}
        >
            {/* Выключено / Лево */}
            <div className={cn(cls.sw_item, { [cls.sw_itemActive]: !isActive })} />

            {/* Включено / Право */}
            <div className={cn(cls.sw_item, { [cls.sw_itemActive]: isActive })} />
        </div>
    );
};
