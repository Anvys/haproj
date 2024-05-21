import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {
    },
};
Dark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
