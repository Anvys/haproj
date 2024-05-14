import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { App } from 'app/App';

import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
);
