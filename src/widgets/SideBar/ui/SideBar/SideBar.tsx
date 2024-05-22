import { FC, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import cls from './SideBar.module.scss';

interface ISideBarProps {
    className?: string
    // children?: React.ReactNode
}

export const SideBar: FC<ISideBarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(() => false);
    return (
        <div className={cn(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <Button theme={EButtonTheme.OUTLINE} isSquare onClick={() => setCollapsed((a) => !a)}>
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    );
};

// import {FC, useState} from "react";
// import "./SideBar.scss"
// import useWindowDimensions from "../../hooks/useMedia";
// import {MOBILE_WIDTH} from "../../const/style/styleSettings";
// import {Button} from "../ui/Button/Button";
// import {observer} from "mobx-react";
// import Global from "../../store/Global";
//
// type TProps = {}
// export const SideBar: FC<TProps> = observer(() => {
//
//     const [isForceMini, setIsForceMini] = useState<boolean>(() => false)
//
//     const {width, height} = useWindowDimensions()
//     const isMini = (width < MOBILE_WIDTH) || isForceMini
//
//     return <div className={`SideBar ${(isMini) ? '--mini' : ''} --theme_${Global.theme}`}>
//         <div className={'navItem'} onClick={()=>setIsForceMini(a=>!a)}>
//             <SideBarItem isMini={isMini} text={'Menu'} />
//         </div>
//         <SideBarItem isMini={isMini} text={'Sidebar menu item 1'}/>
//         <SideBarItem isMini={isMini} text={'item 1'}/>
//         <SideBarItem isMini={isMini} text={'Sidebar menu item 1'}/>
//         <SideBarItem isMini={isMini} text={'item 1'}/>
//         <SideBarItem isMini={isMini} text={'Sidebar menu item 1'}/>
//         <SideBarItem isMini={isMini} text={'item 1'}/>
//         <SideBarItem isMini={isMini} text={'Sidebar menu item 1'}/>
//         <SideBarItem isMini={isMini} text={'item 1'}/>
//         <Button onClick={
//             () => new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log('Time!')
//                     resolve('Time!')
//                 }, 1000)
//             })}>Click!</Button>
//     </div>
// })
//
// type TSideBarProps = {
//     text: string
//     isMini?: boolean
//     onClick?: () => void
// }
// export const SideBarItem: FC<TSideBarProps> = ({
//                                                    text,
//                                                    isMini,
//                                                    onClick,
//                                                }) => {
//
//     if (text.length === 0) {
//         return null
//     }
//     return <div className={'item'} onClick={onClick}>
//         <div className={'icon'}>{text[0].toUpperCase()}</div>
//         {!isMini && <div className={'text'}>{text}</div>}
//     </div>
// }
