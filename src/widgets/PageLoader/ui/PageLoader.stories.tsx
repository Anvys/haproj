import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: { },
    args: { },
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    argTypes: { },
    args: { },
};

export const PrimaryDark = { ...Primary };
PrimaryDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
