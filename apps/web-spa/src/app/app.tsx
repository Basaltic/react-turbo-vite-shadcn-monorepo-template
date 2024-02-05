import { createApp } from '@viness/core';
import { VinessReactApp } from '@viness/react';
import { appModule } from './app.module';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router';
import { Toaster } from 'ui/components/sonner';

export function App() {
    const app = createApp(appModule);

    return (
        <VinessReactApp app={app}>
            <RouterProvider router={router} />
            <Toaster />
        </VinessReactApp>
    );
}
