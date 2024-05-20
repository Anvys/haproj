import React, { FC } from 'react';
import './SimpleControlCard.scss';

type TProps = {
    icon?: string
    name?: string
    status?: string

    children: React.ReactNode
}
export const SimpleControlCard: FC<TProps> = ({
    icon,
    name,
    status,
    children,
}) => (
    <div className="SimpleControlCard">
        {icon && (
            <div className="SimpleControlCard_icon">
                <img alt="" src={icon} width={30} />
            </div>
        )}
        <div className="SimpleControlCard_content">
            <span>{name}</span>
            {status && <span>{status}</span>}
            {children}
        </div>
    </div>
);
