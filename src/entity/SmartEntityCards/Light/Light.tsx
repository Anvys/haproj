import { TLight_All } from 'entity/SmartEntityCards/types/SmartEntities/Light';
import { FC } from 'react';
import { SimpleSwitch } from 'shared/ui/Switch/SimpleSwitch';

import './Light.scss';
import { SimpleControlCard } from '../SimpleControlCard/SimpleControlCard';

type TProps = {
    item: TLight_All
    onPropChange: (prop: string, value: unknown) => void

    isIcon?: boolean
}

const icon_powerOn = require('../../../../../src/assets/svg/light/light_on.svg');
const icon_powerOff = require('../../../../../src/assets/svg/light/light_off.svg');

export const Light: FC<TProps> = ({
    item,
    onPropChange,
    isIcon,
}) => {
    const onTogglePower = () => {
        onPropChange('power', !item.power);
    };

    // return <div className={'LightWrapper'}>
    //     {isIcon && <div className={'LightWrapper_icon'}>
    //         <img src={item.power ? icon_powerOn : icon_powerOff} width={30}/>
    //     </div>}
    //     <div className={'LightWrapper_content'}>
    //         <span>{item.name}</span>
    //         <SimpleSwitch selectedValue={item.power} onChange={onTogglePower}/>
    //     </div>
    //
    // </div>
    return (
        <SimpleControlCard
            name={item.name}
            icon={item.power ? icon_powerOn : icon_powerOff}
        >
            <SimpleSwitch selectedValue={item.power} onChange={onTogglePower} />
        </SimpleControlCard>
    );
};
