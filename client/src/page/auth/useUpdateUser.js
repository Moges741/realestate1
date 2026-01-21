import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "./auth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending:isUpdating } = useMutation({
    mutationFn:({full_name, avatar})=> updateUserData({ full_name, avatar}),

    onSuccess: ({ profile }) => {
      queryClient.setQueryData(["session"], (old) => {
        if (!old) return old;

        return {
          ...old,
          profile: {
            ...old.profile,
            ...profile,
          },
        };
      });
    },
    onError:(err)=>console.log(err.message)
  });
  console.log(updateUser);

  return {updateUser, isUpdating}
}