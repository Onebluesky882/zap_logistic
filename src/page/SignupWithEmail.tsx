import supabase from "@/utils/supabase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
type Register = {
  email: string;
  password: string;
  confirmPassword: string;
};
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Register>();
  const navigate = useNavigate();
  const [watchPassword, setWatchPassword] = useState(false);

  const toggle = () => {
    setWatchPassword((prev) => !prev);
  };

  const onSubmit = async (data: Register) => {
    if (data.password != data.confirmPassword) {
      alert("password not match");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/waiting-confirm-email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required</p>
          )}
        </div>

        <div className="mb-4 relative">
          <label
            onClick={toggle}
            className="block text-sm font-medium mb-1 text-gray-700"
          >
            Password
          </label>
          <span onClick={toggle}>
            {watchPassword ? (
              <IoEyeSharp className="absolute right-3 mt-3" />
            ) : (
              <FaRegEyeSlash className="absolute right-3 mt-3" />
            )}
          </span>
          <input
            type={watchPassword ? "text" : "password"}
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />

          {errors.password && (
            <p className="text-red-500 text-xs mt-1">Password is required</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Confirm Password
          </label>
          <input
            onClick={toggle}
            type="password"
            {...register("confirmPassword", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">Confirm your password</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
