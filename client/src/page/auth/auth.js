import supabase, { supabaseAdmin, supabaseUrl } from "./supabase";

export async function LoginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
export async function SignupApi({ email, password, fullName, role = "user" }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        full_name: fullName,
        avatar: null,
        role,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getSessionApi() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw new Error(sessionError.message);
  }

  if (!session) {
    return { session: null, profile: null };
  }

  if (!session.user) {
    return { session, profile: null };
  }

  console.log(session.user.id);

  // let { data: profile, error: profileError } = await supabase
  //   .from("profiles")
  //   .select("role")
  //   .eq("id", session.user.id)
  //   .single();
  // let { data: profileImage, error: imageError } = await supabase
  //   .from("profiles")
  //   .select("profile_image")
  //   .eq("id", session.user.id)
  //   .single();
  let { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, profile_image, display_name, email")
    .eq("id", session.user.id)
    .single();

  if (profileError) {
    console.error("Profile fetch error:", profileError.message);
    console.log(profile);
    return { session, profile: null };
  }
  console.log(profile);
  return { session, profile };
}

export async function LogoutApi() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}

export const signUpWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error(error);
  }
};

export async function getLoggedUsers() {
  let { data, error } = await supabase.from("profiles").select("*");
  console.log(data);
  return data;
}

// let { data: profiles, error } = await supabase
//   .from('profiles')
//   .select('*')
export async function updateUserData({ full_name, avatar }) {
  console.log("updateUserData avatar input:", avatar);
  // Get current user to obtain id
  const { data: userData, error: userError } = await supabase.auth.getUser();
  console.log(userData);
  if (userError) throw new Error(userError.message);
  const user = userData.user;

  // Build metadata to update. We'll upload avatar first (if provided)
  let avatarUrl;

  if (avatar) {
    // Normalize input: could be FileList (from <input>), array, or a File object
    let avatarFile = avatar;
    if (typeof File !== "undefined" && avatar instanceof FileList) {
      avatarFile = avatar[0];
    } else if (Array.isArray(avatar)) {
      avatarFile = avatar[0];
    }

    // If avatar is already a URL string, skip upload and use it directly
    if (typeof avatarFile === "string") {
      avatarUrl = avatarFile;
    } else {
      if (!avatarFile) throw new Error("No avatar file provided");

      // Use the existing 'avatar' bucket (matches current uploads in your project)
      const fileName = `avatar-${user.id}-${Date.now()}`;
      const { error: storageError } = await supabase.storage
        .from("avatar")
        .upload(fileName, avatarFile);

      if (storageError) throw new Error(storageError.message);

      avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}?t=${Date.now()}`;
    }
  }
  //https://uoktfmgjuraiwhpizenn.supabase.co/storage/v1/object/public/avatar/Sb1bef9dcf134426aa63e5cab7b8b7ce6f.jpg_480x480q75.jpg_.avif
  // Prepare profile update payload: the app expects profile fields in `profiles`
  const profileUpdate = {};
  if (full_name) profileUpdate.display_name = full_name;
  if (avatarUrl) profileUpdate.profile_image = avatarUrl;

  if (Object.keys(profileUpdate).length === 0) {
    return { user };
  }

  const { data: updatedProfiles, error: profileError } = await supabase
    .from("profiles")
    .update(profileUpdate)
    .eq("id", user.id)
    .select()
    .single();


  if (profileError) {
    throw new Error(
      profileError.message ||
        "Failed to update profile. Ensure a profiles row exists for this user and RLS allows updates."
    );
  }

  if (!updatedProfiles || updatedProfiles.length === 0) {
    throw new Error(
      "Profile update returned no rows. Ensure a profiles row exists for this user and RLS allows updates."
    );
  }

  return { user, profile: updatedProfiles };
}
