/**
 * ========================================
 */

import { Meta } from '@storybook/react/*';
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Dark } from 'widgets/PageError/ui/PageError.stories';
import { SimpleSwitch } from 'shared/ui/Switch/SimpleSwitch';

const meta = {
    title: 'shared/SimpleSwitch',
    component: SimpleSwitch,
    parameters: {
    },
    args: { onChange: fn() },
} satisfies Meta<typeof SimpleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Configurable: Story = {
    argTypes: {
        isActive: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
    args: {
        isActive: false,
        // onChange: () => {},
    },
};

export const ConfigurableDark = { ...Configurable };
ConfigurableDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];

// export const Clear: Story = {
//     args: {
//         // children: 'Clear',
//         // theme: EButtonTheme.CLEAR,
//     },
// };
