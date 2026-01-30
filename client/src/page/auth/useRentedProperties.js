import { useQuery } from "@tanstack/react-query";
import { rentedProperties } from "./auth";

export function useRentedProperties() {
  const { data, status, error } = useQuery({
    queryKey: ["rented"],
    queryFn: rentedProperties,

  });
  console.log(data);

  return { data, status, error };
}