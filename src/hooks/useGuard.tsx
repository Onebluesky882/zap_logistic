import supabase from "@/utils/supabase";
import { User } from "@supabase/auth-js";
import { useState } from "react";

const useGuard = () => {
  const [user, setUser] = useState<User | null>();
  const Guard = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUser(user);
    }
  };
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  return { user, Guard, signOut };
};

export const defaultGuard = {
  user: {} as User,
  Guard: async () => {},
  signOut: async () => {},
};
export default useGuard;
