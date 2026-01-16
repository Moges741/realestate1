import { useNavigate } from "react-router";
import { LogoutApi } from "./auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogout() {
    const navigate = useNavigate();
      const queryClient = useQueryClient();

  const {
    mutate: logout,
    status,
    error,
    isPending,
  } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      queryClient.setQueryData(["session"], null);
      queryClient.clear();
      navigate('/');
    },
  });

  return {
    logout,
    status,
    error,
    isPending,
  };
}
