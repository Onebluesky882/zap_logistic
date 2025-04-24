import supabase from "@/utils/supabase";
import { redirect } from "react-router";

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
