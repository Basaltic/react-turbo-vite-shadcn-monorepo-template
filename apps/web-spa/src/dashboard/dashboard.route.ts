import { rootRoute } from "@/app/router/root-route";
import { createRoute } from "@tanstack/react-router";
import { DashboardLayout } from "./dashboard-layout";

export const dashboardRoute = createRoute({
  path: "/app",
  getParentRoute: () => rootRoute,
  component: DashboardLayout,
});
