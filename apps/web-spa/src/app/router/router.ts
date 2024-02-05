import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './root-route';
import { homeRoute } from '@/dashboard/home/home.route';
import { dashboardRoute } from '@/dashboard/dashboard.route';
import { authRoute } from '@/app/authentication/auth.route';

const routeTree = rootRoute.addChildren([authRoute, dashboardRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
