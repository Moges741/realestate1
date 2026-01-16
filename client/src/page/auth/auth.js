import supabase, { supabaseAdmin } from "./supabase";

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
        full_name:fullName,
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
    .eq("id", session.user.id);

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
