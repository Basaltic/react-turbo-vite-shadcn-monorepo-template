import { TanStackRouterDevtools } from '../router/router-devtool';

import { AppContent } from './app-content';
import { TooltipProvider } from 'ui/components/tooltip';

export function AppLayout() {
    return (
        <TooltipProvider delayDuration={0}>
            <AppContent />
            <TanStackRouterDevtools />
        </TooltipProvider>
    );
}
