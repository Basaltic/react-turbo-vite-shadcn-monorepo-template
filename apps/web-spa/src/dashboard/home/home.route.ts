import { rootRoute } from '@/app/router/root-route';
import { Route } from '@tanstack/react-router';
import { HomePage } from './home.page';

export const homeRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
