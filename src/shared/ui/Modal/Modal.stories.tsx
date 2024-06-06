import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: { },
    args: { },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    argTypes: { },
    args: {
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda atque consectetur culpa cum dolorem doloremque et fugiat libero magnam minima modi, molestiae molestias mollitia necessitatibus qui rerum similique suscipit.</div>,
    },
};

export const PrimaryDark = { ...Primary };
PrimaryDark.decorators = [ThemeDecorator(EGlobalThemes.DARK)];
