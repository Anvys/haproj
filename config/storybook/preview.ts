import type { Preview } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { LangDecorator } from 'shared/config/storybook/LangDecorator/LangDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        RouterDecorator,
        StyleDecorator,
        ThemeDecorator(EGlobalThemes.LIGHT),
        LangDecorator(),
    ],
};

export default preview;
