import { getSessionApi } from "./auth";
import { useQuery } from "@tanstack/react-query";

export function useGetSession() {
  const { data, status, error } = useQuery({
    queryKey: ["session"],
    queryFn: getSessionApi,
    staleTime: 0, // always fresh
    retry: false,
  });

  return { data, status, error };
}
