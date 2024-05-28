import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    targetElement?: HTMLElement;
    children?: ReactNode
}

export const Portal: FC<IPortalProps> = (props) => {
    const {
        targetElement = document.body,
        children,
    } = props;
    return createPortal(children, targetElement);
};
