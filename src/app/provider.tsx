'use client';

import { ProgressProvider } from '@bprogress/next/app';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider height="4px" color="#ff7a05" options={{ showSpinner: true }} shallowRouting>
            {children}
        </ProgressProvider>
    );
};
