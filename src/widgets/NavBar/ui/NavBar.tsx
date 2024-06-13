import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { AccountControl } from 'features/AuthByUsername';
import cls from './NavBar.module.scss';

interface INavBarProps {
    className?: string
    // children?: React.ReactNode
}
export const NavBar: FC<INavBarProps> = (props) => {
    const { className } = props;
    const isAuth = false;
    return (
        <div className={cn(cls.NavBar, {}, [className])}>
            {/* <div /> */}
            {/* <div className={cn(cls.links)}> */}
            {/*    <AppLink theme={EAppLinkTheme.SECONDARY} to="/welcome"> */}
            {/*        Welcome */}
            {/*    </AppLink> */}
            {/*    <AppLink theme={EAppLinkTheme.SECONDARY} to="/about"> */}
            {/*        About */}
            {/*    </AppLink> */}
            {/* </div> */}
            <div className={cn(cls.switchers)}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <AccountControl />
        </div>
    );
};

// type TProps = {}
// export const NavBar: FC<TProps> = observer(() => {
//     const ref = useRef<HTMLDivElement | null>(null)
//     // const [ref, setRef] = useState<React.MutableRefObject<HTMLDivElement> | null>(() => null)
//
//     // const [theme, setTheme] = useState<number>(() => 0)
//
//     useScrollHandler(ref)
//
//     const onThemeSwitch = (v: number) => {
//         Global.setTheme(v)
//     }
//
//
//     // useEffect(() => {
//     //     if(ref?.current){
//     //         scrollHandler(ref)
//     //     }
//     // }, [ref])
//     return <div className={`NavBar --theme_${Global.theme}`} ref={ref}>
//         <div className={'item'}>1</div>
//         <div className={'item'}>2</div>
//         <div className={'item'}>3</div>
//         <div className={'item'}>4</div>
//         <div className={'item'}>5</div>
//         <div className={'item'}>6</div>
//         <div className={'item'}>7</div>
//         <div className={'item'}>8</div>
//         <SimpleThemeSwitch selectedValue={Global.theme} onChange={(v) => onThemeSwitch(v)}/>
//     </div>
// })
//
// type _g = (this: HTMLDivElement, ev: MouseEvent) => any
// const useScrollHandler = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
//     // console.log(`ref`, ref.current)
//     if (!ref) {
//         return
//     }
//
//     const [isScroll, setIsScroll] = useState<boolean>(() => false)
//     const onMouseDown: _g = e => {
//         e.preventDefault()
//         switch (e.button) {
//             case 0: {//left
//                 setIsScroll(true)
//                 // isScroll = true
//                 break
//             }
//             case 2: {//right
//                 //@ts-ignore
//                 // onCurTileSelect(e.offsetX, e.offsetY, centX, centY)
//                 break
//             }
//         }
//     }
//     const onMouseUp: _g = e => {
//         e.preventDefault()
//         switch (e.button) {
//             case 0: {//left
//                 setIsScroll(false)
//                 // isScroll = true
//                 break
//             }
//             case 2: {//right
//                 //@ts-ignore
//                 // onCurTileSelect(e.offsetX, e.offsetY, centX, centY)
//                 break
//             }
//         }
//     }
//
//     const onMouseMove = useCallback<_g>(e => {
//         // isScroll = isLKMHold
//         e.preventDefault()
//         if (isScroll && ref.current) {
//             //@ts-ignore
//             ref.current.scrollBy(-e.movementX, -e.movementY)
//         }
//     }, [isScroll])
//     // ref.current.removeEventListener('')
//
//     useEffect(() => {
//         if (ref?.current) {
//             ref.current.addEventListener('mousemove', onMouseMove)
//             ref.current.addEventListener('mousedown', onMouseDown)
//             ref.current.addEventListener('mouseup', onMouseUp)
//             ref.current.addEventListener('mouseleave', onMouseUp)
//         }
//         return () => {
//             if (ref?.current) {
//                 ref.current.removeEventListener('mousemove', onMouseMove)
//                 ref.current.removeEventListener('mousedown', onMouseDown)
//                 ref.current.removeEventListener('mouseup', onMouseUp)
//                 ref.current.removeEventListener('mouseleave', onMouseUp)
//             }
//         }
//     }, [onMouseDown, onMouseMove])
//
// }
