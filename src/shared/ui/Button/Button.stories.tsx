/**
 * ========================================
 */

import { Meta } from '@storybook/react/*';
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, EButtonSize, EButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Configurable: Story = {
    argTypes: {
        size: {
            // @ts-ignore
            options: EButtonSize,
            control: { type: 'radio' },
        },
        theme: {
            // @ts-ignore
            options: EButtonTheme,
            control: { type: 'radio' },
        },
        children: {
            options: ['Click!', 'LargeClick!', '>', '<'],
            control: { type: 'radio' },
        },
    },
    args: {
        children: 'Click!',
        theme: EButtonTheme.OUTLINE,
    },
};

export const ConfigurableDark = { ...Configurable };
ConfigurableDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: EButtonTheme.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: EButtonTheme.OUTLINE,
    },
};
export const OutlineF: Story = {
    args: {
        children: 'OutlineF',
        theme: EButtonTheme.OUTLINE_FILLED,
    },
};
export const OutlineFInverted: Story = {
    args: {
        children: 'OutlineF_Inv',
        theme: EButtonTheme.OUTLINE_FILLED_INVERTED,
    },
};
export const Square: Story = {
    args: {
        children: '>',
        size: EButtonSize.L,
        isSquare: true,
        theme: EButtonTheme.OUTLINE_FILLED,
    },
};
