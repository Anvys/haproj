import { Decorator } from '@storybook/react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export type TLang = 'ru' | 'en'
export const LangDecorator = (lang: TLang = 'ru'): Decorator => (StoryComponent) => (
    <I18nextProvider i18n={i18nForTests}>
        <StoryComponent />
    </I18nextProvider>
);
