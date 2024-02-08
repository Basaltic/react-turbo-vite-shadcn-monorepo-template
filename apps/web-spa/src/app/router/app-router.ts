import { createRouter } from '@tanstack/react-router';
import { routeTree } from './route-tree';

export const router = createRouter({ routeTree: routeTree });

// Register things for typesafety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
