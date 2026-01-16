import { useQuery } from "@tanstack/react-query";
import { getLoggedUsers } from "./auth";

export function useLoggedUser() {
  const { data, status, error } = useQuery({
    queryKey: ["users"],
    queryFn: getLoggedUsers,

  });
  console.log(data);

  return { data, status, error };
}