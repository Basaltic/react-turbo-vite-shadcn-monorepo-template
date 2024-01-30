import { Router } from '@tanstack/react-router';
import { rootRoute } from './root-route';
import { homeRoute } from '@/dashboard/home/home.route';
import { dashboardRoute } from '@/dashboard/dashboard.route';

const routeTree = rootRoute.addChildren([homeRoute, dashboardRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
