import { useMutation } from "@tanstack/react-query";
import type { AppointmentInput } from "../backend.d";
import { useActor } from "./useActor";

export function useBookAppointment() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (input: AppointmentInput) => {
      if (!actor) throw new Error("Actor not available");
      return actor.bookAppointment(input);
    },
  });
}
