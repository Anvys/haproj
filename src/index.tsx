import ReactDOM from 'react-dom/client';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);
