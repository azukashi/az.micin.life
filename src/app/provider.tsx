'use client';

import { ProgressProvider } from '@bprogress/next/app';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider height="4px" color="#fc64ab" options={{ showSpinner: true }} shallowRouting>
            {children}
        </ProgressProvider>
    );
};
