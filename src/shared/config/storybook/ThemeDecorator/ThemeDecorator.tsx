import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { EGlobalThemes } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: EGlobalThemes): Decorator => (StoryComponent) => {
    /**
     * Для порталов и тп
     */
    document.body.className = theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`App ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
