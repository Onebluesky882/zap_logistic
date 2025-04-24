import supabase from "@/utils/supabase";

const Auth = () => {
  const LoginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "/dashboard" },
    });
  };

  return { LoginWithGoogle };
};
export default Auth;
