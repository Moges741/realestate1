import { getSessionApi } from "./auth";
import { useQuery} from "@tanstack/react-query";

export function useGetSession() {
 
  
  const { data, status, error } = useQuery({
    queryKey: ["session"],
    queryFn: getSessionApi,
   
  });

  return { data, status, error };
}
