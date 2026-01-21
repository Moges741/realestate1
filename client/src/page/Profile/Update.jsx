import { useGetSession } from "../auth/useSession";
import { useForm } from "react-hook-form";

import "./update.css";
import { useUpdateUser } from "../auth/useUpdateUser";
function Update() {
  const { updateUser, isUpdating } = useUpdateUser();

  const { data } = useGetSession();
  console.log(data);
  const profileData = data?.profile;
  const { display_name, email } = profileData || {};
  const {
    register,
    handleSubmit,
    
  } = useForm();
  function onSubmit(data) {
    updateUser({ full_name: data.display_name, avatar: data.profile_image[0] });
  }
  if (isUpdating) return <p>Updating...</p>;
  return (
    <div>
      <form action="" className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="display_name">Full Name:</label>
        <input
          type="text"
          name="display_name"
          id="display_name"
          defaultValue={display_name}
          {...register("display_name")}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          disabled
          {...register("email")}
        />

        <label htmlFor="profile_image">Profile Image:</label>
        <input
          type="file"
          name="profile_image"
          id="profile_image"
          {...register("profile_image")}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Update;
