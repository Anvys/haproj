import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { EInputTheme, Input } from 'shared/ui/Input/Input';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { Loader } from 'shared/ui/Loader/Loader';
import { authMe } from '../../model/services/authMe/authMe';
import cls from './LoginForm.module.scss';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginFormSlice } from '../../model/slice/loginSlice';

interface ILoginFormProps {
    className?: string
}
const initialReducers: ReducersList = {
    loginForm: loginFormSlice.reducer,
};
export const LoginForm: FC<ILoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const user = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const dispatch = useAppDispatch();

    const onUsernameChange = (v: string) => {
        dispatch(loginFormSlice.actions.setUsername(v));
    };
    const onPasswordChange = (v: string) => dispatch(loginFormSlice.actions.setPassword(v));

    const onLogin = () => dispatch(authMe({ user, password }));

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            {
                isLoading
                    ? <Loader />
                    : (
                        <div className={cn(cls.LoginForm, {}, [className])}>
                            {error && <span>{error}</span>}
                            <Input
                                value={user}
                                onChange={onUsernameChange}
                                theme={EInputTheme.LOGIN}
                                placeholder={t('Логин')}
                            />
                            <Input
                                type="password"
                                value={password}
                                onChange={onPasswordChange}
                                theme={EInputTheme.LOGIN}
                                placeholder={t('Пароль')}
                            />
                            <Button
                                onClick={onLogin}
                                theme={EButtonTheme.OUTLINE_FILLED}
                            >
                                {t('Войти')}
                            </Button>
                        </div>
                    )
            }
        </DynamicModuleLoader>
    );
};
