import { Decorator } from '@storybook/react';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: EGlobalThemes): Decorator => (StoryComponent) => {
    /**
     * Для порталов и тп
     */
    document.body.className = theme;
    return (
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    );
};
