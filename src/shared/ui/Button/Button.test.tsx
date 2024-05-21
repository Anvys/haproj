import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        // screen.debug();
    });

    test('Test clear theme', () => {
        render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
    test('Test correct children text', () => {
        const str = 'j testing string __654';
        render(<Button theme={EButtonTheme.OUTLINE_FILLED}>{str}</Button>);
        const elem = screen.getByText(str);

        expect(elem).toBeInTheDocument();
        expect(elem).toHaveTextContent(str);
        // screen.debug();
    });
});
