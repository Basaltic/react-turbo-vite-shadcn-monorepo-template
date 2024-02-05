import { rootRoute } from '@/app/router/root-route';
import { createRoute } from '@tanstack/react-router';
import { homeRoute } from './home/home.route';
import { DashboardLayout } from './dashboard-layout';

export const dashboardRoute = createRoute({ getParentRoute: () => rootRoute, path: '/app', component: DashboardLayout });

dashboardRoute.addChildren([homeRoute]);
