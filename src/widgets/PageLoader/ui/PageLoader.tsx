import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import * as cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string
    // children?: React.ReactNode
}
export const PageLoader: FC<IPageLoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
