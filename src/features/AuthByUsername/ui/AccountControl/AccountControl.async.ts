import { FC, lazy } from 'react';

// @ts-ignore
export const AccountControlAsync = lazy<FC>(() => import('./AccountControl'));
