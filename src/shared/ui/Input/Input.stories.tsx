/**
 * ========================================
 */

import { Meta } from '@storybook/react/*';
import { StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { EInputTheme, Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
    },
    args: { },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Configurable: Story = {
    argTypes: {
        theme: {
            control: { type: 'radio' },
            // @ts-ignore
            options: EInputTheme,
        },
    },
    args: {
        theme: EInputTheme.PRIMARY,
    },
};

export const ConfigurableDark = { ...Configurable };
ConfigurableDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
