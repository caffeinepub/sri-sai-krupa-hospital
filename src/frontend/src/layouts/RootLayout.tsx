import { Outlet } from "@tanstack/react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
