import { lazy } from 'react';

export const WelcomePageAsync = lazy(
    (
        () => new Promise(
            (
                (resolve) => {
                    // @ts-ignore
                    setTimeout(() => resolve(import('./WelcomePage')), 1000);
                }
            ),
        )
    ),
);
