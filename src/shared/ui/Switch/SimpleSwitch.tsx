import { FC } from 'react';
import './SimpleSwitch.scss';

type TProps = {
    selectedValue: boolean

    onChange: (v: boolean) => void
}
export const SimpleSwitch: FC<TProps> = ({
    selectedValue,
    onChange,
}) => (
    <div
        className={`Switch ${selectedValue ? 'inactive' : 'active'}`}
        onClick={() => onChange(!selectedValue)}
    >
        {/* Выключено / Лево */}
        <div className={`sw_item ${selectedValue ? 'inactive' : 'active'}`} />

        {/* Включено / Право */}
        <div className={`sw_item ${selectedValue ? 'active' : 'inactive'}`} />
    </div>
);
