import { Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import { cn } from 'ui/lib/utils';
import { PageSuspenseFallback } from './app-suspense-fallback';

export function AppContent(props: { className?: string }) {
    const { className } = props;
    return (
        <div className={cn('flex-1 center relative overflow-auto', className)}>
            <div className="w-full h-full">
                <Suspense fallback={<PageSuspenseFallback />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}
