import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Routes>
        {
            Object.values(routeConfig).map((v) => (
                <Route
                    key={v.path}
                    path={v.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {v.element}
                            </div>
                        </Suspense>
                    )}
                />
            ))
        }
    </Routes>
);
