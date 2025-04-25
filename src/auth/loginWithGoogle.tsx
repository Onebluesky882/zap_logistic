import supabase from "@/utils/supabase";

const LoginWithGoogle = () => {
  const auth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "/dashboard" },
    });
  };

  return { auth };
};
export default LoginWithGoogle;
