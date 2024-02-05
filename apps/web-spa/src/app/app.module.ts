import { createModule } from '@viness/core';
import { dashboardModule } from '@/dashboard/dashboard.module';

export const appModule = createModule({
    imports: [dashboardModule],
    providers: [],
});
