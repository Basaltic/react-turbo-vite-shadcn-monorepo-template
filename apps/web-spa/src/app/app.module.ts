import { Module } from '@viness/core';
import { DatabaseModule } from '@/common/database/db.module';
import { DashboardModule } from '@/dashboard/dashboard.module';

@Module({
    imports: [DatabaseModule, DashboardModule],
    providers: [],
})
export class AppModule {}
