import { render, screen } from '@testing-library/react';
import { Button, EThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });

    test('Test clear theme', () => {
        render(<Button theme={EThemeButton.CLEAR}>TEST</Button>);
        screen.debug();
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
