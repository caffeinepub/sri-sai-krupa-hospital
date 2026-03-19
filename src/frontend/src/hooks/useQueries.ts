import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Not ready");
      return actor.submitContact(data.name, data.email, data.message);
    },
  });
}

// Stub for legacy components
export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: async (_email: string) => {
      // Newsletter not supported in current backend
    },
  });
}
