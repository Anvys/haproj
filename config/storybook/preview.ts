import type { Preview } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { LangDecorator } from '../../src/shared/config/storybook/LangDecorator/ThemeDecorator';

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
        ThemeDecorator(EGlobalThemes.LIGHT),
        StyleDecorator,
        LangDecorator(),
    ],
};

export default preview;
