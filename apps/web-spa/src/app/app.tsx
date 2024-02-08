import { createApp } from '@viness/core';
import { VinessReactApp } from '@viness/react';
import { appModule } from './app.module';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/app-router';
import { Toaster } from 'ui/components/sonner';
import { ThemeProvider } from '@/common/components/theme/theme-provider';

export function App() {
    const app = createApp(appModule);

    return (
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <VinessReactApp app={app}>
                <RouterProvider router={router} />
                <Toaster />
            </VinessReactApp>
        </ThemeProvider>
    );
}
