import { FC, useEffect } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getLamps, lampSlice, requestLamps } from 'entities/Lamp';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { TLampAny } from 'entities/Lamp/model/types/ILamp';
import { LampCard } from 'widgets/LampView/ui/LampCard/LampCard';
import cls from './LampView.module.scss';

interface ILampViewProps {
    className?: string
    // children?: React.ReactNode
}

export const LampView: FC<ILampViewProps> = (props) => {
    const { className } = props;
    const lamps = useSelector(getLamps);
    const dispatch = useAppDispatch();
    const auth = useSelector(getUserAuthData);

    const updateLamp = (lamp:TLampAny) => dispatch(lampSlice.actions.updateLamp(lamp));

    useEffect(() => {
        dispatch(requestLamps());
    }, [dispatch, auth]);
    return (
        <div className={cn(cls.LampView, {}, [className])}>
            {lamps.map((v) => (
                <LampCard onUpdate={updateLamp} item={v} />
            ))}
        </div>
    );
};
