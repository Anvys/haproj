import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Load..</div>}>
        <Routes>

            {
                Object.values(routeConfig).map((v) => (
                    <Route
                        key={v.path}
                        path={v.path}
                        element={(
                            <div className="page-wrapper">
                                {v.element}
                            </div>
                        )}
                    />
                ))
            }

        </Routes>
    </Suspense>
);
