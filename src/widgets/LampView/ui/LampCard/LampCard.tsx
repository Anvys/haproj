import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { lampTypes } from 'entities/Lamp/lib/lampTypes';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { ELampStatus, TLampAny } from 'entities/Lamp/model/types/ILamp';
import { lampStatus } from 'entities/Lamp/lib/lampStatus';
import { useTranslation } from 'react-i18next';
import cls from './LampCard.module.scss';

interface ILampCardProps {
    className?: string
    onUpdate: (item: TLampAny) => void
    item: TLampAny
}

export const LampCard: FC<ILampCardProps> = (props) => {
    const { t } = useTranslation();
    const { className, item, onUpdate } = props;

    const onLampUpdate = () => {
        onUpdate({
            ...item,
            status: item.status === ELampStatus.ON ? ELampStatus.OFF : ELampStatus.ON,
        });
    };

    return (
        <div className={cn(cls.LampCard, {}, [className])}>
            <Text title={item.name} justify="center" />
            <span className={cls.field}>
                <span>
                    {t('Описание')}
                    :
                </span>
                <span>{item.description}</span>
            </span>
            <span className={cls.field}>
                <span>
                    {t('Тип')}
                    :
                </span>
                <span>{lampTypes[item.type]}</span>
            </span>
            <Button
                onClick={onLampUpdate}
                theme={EButtonTheme.CLEAR}
                className={cls.field}
            >
                <span>
                    {t('Статус')}
                    :
                </span>
                <span>{lampStatus[item.status]}</span>
            </Button>
        </div>
    );
};
