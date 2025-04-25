import supabase from "@/utils/supabase";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginWithEmail = () => {
  type LoginFormInput = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormInput>({});
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);

  const onSubmit = async (data: LoginFormInput) => {
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      alert("failed !! please try again ");
    }
  };

  /* 
  if no user ask for sign up 

  if no go to homepage  
  
  yes navigate signup page
  */

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginWithEmail;
