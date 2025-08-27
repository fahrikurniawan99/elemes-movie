import { MOVIE_API } from "@/services/movieApi";
import type { GuestSessionResponse } from "@/types/api";
import delay from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export interface UseGuestSessionProps {}

export default function useGuestSession({}: UseGuestSessionProps) {
  return useQuery({
    queryKey: ["guest-session"],
    queryFn: async () => {
      await delay(50);
      const response = await MOVIE_API.get<GuestSessionResponse>(
        "/authentication/guest_session/new"
      );
      localStorage.setItem("guest_session_id", response.data.guest_session_id);
      localStorage.setItem(
        "guest_session_expires_at",
        response.data.expires_at
      );
      return response.data;
    },
    enabled: false,
  });
}
