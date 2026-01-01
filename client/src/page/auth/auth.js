import supabase from "./supabase";
import md5 from "md5";
export async function LoginApi({email, password}){
  const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})

if(error){
    throw new Error(error.message)
}

return data
}
export async function SignupApi({ email, password, fullName }) {
     const avatar = `https://www.gravatar.com/avatar/${md5(
    email.toLowerCase()
  )}?d=identicon`;

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar
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
  } = await supabase.auth.getSession();
  return session;
}
