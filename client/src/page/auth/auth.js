import supabase from "./supabase";

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
        fullName,
        avatar: "",
        role,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }
    // let { data: profile, error: profileError } = await supabase
    //   .from("profiles")
    //   .select("role")
    //   .eq("id", data.user.id)
    //   .single();
    // if (error) {
    //   throw new Error(error.message);
    // }
    // if (profileError) {
    //   throw new Error(profileError.message);
    // }

  return  data 
}



export async function getSessionApi() {
 
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
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
  

  let { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", session.user.id)
    .single();
  
  if (profileError) {

    console.error("Profile fetch error:", profileError.message);
    return { session, profile: null };
  }
  
  return { session, profile };
}

export async function LogoutApi() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
}
