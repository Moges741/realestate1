import { useGetSession } from "../auth/useSession";
import { useForm } from "react-hook-form";

import "./update.css";
function Update() {

    const {data, status} = useGetSession()
    console.log(data)
    const profileData = data?.profile.at(0);
    const { display_name, email, profile_image } = profileData;
    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  function onSubmit(data){
    console.log(data)

  }

  return (
    <div>
      <form action="" className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="display_name">Full Name:</label>
        <input type="text" name="display_name" id="display_name" defaultValue={display_name} {...register("display_name")} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={email} disabled {...register("email")} />

        <label htmlFor="profile_image">Profile Image:</label>
        <input type="file" name="profile_image" id="profile_image" {...register("profile_image")} />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Update;
