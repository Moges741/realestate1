import supabase from "./supabase";

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


  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar:""
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

export async function LogoutApi(){
  const {error} = await supabase.auth.signOut()
  if(error){
    console.log(error.message)
  }
}
