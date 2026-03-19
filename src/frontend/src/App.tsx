import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Portfolio from "./pages/Portfolio";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
      <Toaster position="bottom-right" richColors />
    </QueryClientProvider>
  );
}
