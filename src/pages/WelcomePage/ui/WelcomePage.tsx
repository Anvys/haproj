import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('WelcomePage')}</h1>
        </div>
    );
};

export default WelcomePage;
