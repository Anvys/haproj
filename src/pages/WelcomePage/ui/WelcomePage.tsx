import { useTranslation } from 'react-i18next';
import { LampView } from 'widgets/LampView';

const WelcomePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('WelcomePage')}</h1>

            <LampView />
        </div>
    );
};

export default WelcomePage;
