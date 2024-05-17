/**
 * ========================================
 */

import { Meta } from '@storybook/react/*';
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, EThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    },
    argTypes: {
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: EThemeButton.CLEAR,
    },
};
