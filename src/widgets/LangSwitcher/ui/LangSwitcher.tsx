import { FC, useCallback } from 'react';
// import { cn } from 'shared/lib/classNames/classNames';
// import cls from './LangSwitcher.module.scss';
import { Button, EThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface ILangSwitcherProps {
    // className?: string
    // children?: React.ReactNode
}
export const LangSwitcher: FC<ILangSwitcherProps> = () => {
    // const { className } = props;
    const { t, i18n } = useTranslation();

    const doLangToggle = useCallback(
        () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru'),
        [i18n],
    );
    return (
        <Button
            theme={EThemeButton.CLEAR}
            onClick={doLangToggle}
        >
            {t('Язык')}
        </Button>
    );
};
