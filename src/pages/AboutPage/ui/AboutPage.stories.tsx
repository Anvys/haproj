import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: { },
    args: { },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    argTypes: { },
    args: { },
};

export const PrimaryDark = { ...Primary };
PrimaryDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
