import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string
    // children?: React.ReactNode
}
export const Loader: FC<ILoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn('loader', {}, [className])} />
    );
};
