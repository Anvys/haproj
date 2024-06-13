import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, userSlice } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './AccountControl.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

export interface IAccountControlProps {
    className?: string
    // children?: React.ReactNode
}

const AccountControl: FC<IAccountControlProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const dispatch = useAppDispatch();
    const onLogout = () => dispatch(userSlice.actions.logout());
    return (
        <div className={cn(cls.AccountControl, {}, [className])}>
            {
                authData
                    ? (
                        <>
                            {authData.user}
                            <Button
                                onClick={onLogout}
                                theme={EButtonTheme.OUTLINE_FILLED}
                            >
                                {t('Выйти')}
                            </Button>
                        </>
                    )
                    : <LoginForm />
            }
        </div>
    );
};

export default AccountControl;
