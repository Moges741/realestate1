import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRole as updateRoleApi } from "./auth";

export function useUpdateRole() {
  const queryClient = useQueryClient();

  const { mutate: updateRole, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, updateValue }) => updateRoleApi({ id, updateValue }),

    onSuccess: (data) => {
      const updated = Array.isArray(data) ? data[0] : data;
      if (!updated) return;

      queryClient.setQueryData(["users"], (old) => {
        if (!old) return old;
        return old.map((u) => (u.id === updated.id ? { ...u, ...updated } : u));
      });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateRole, isUpdating };
}
