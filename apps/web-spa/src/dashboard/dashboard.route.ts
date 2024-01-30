import { rootRoute } from '@/app/router/root-route';
import { Route } from '@tanstack/react-router';

export const dashboardRoute = new Route({ getParentRoute: () => rootRoute, path: '/app' });

dashboardRoute.addChildren([]);
