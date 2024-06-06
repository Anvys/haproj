import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import WelcomePage from './WelcomePage';

const meta = {
    title: 'pages/WelcomePage',
    component: WelcomePage,
    parameters: { },
    args: { },
} satisfies Meta<typeof WelcomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    argTypes: { },
    args: { },
};

export const PrimaryDark = { ...Primary };
PrimaryDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
