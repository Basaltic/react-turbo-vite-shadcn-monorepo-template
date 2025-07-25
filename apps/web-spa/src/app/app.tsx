import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/app-router";
import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeProvider } from "@/common/components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
