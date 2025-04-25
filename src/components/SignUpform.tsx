import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

type SignupFormProps = {
  handleSubmit: (onSubmit: any) => void;
  register: any;
  errors: any;
  toggle: () => void;
  watchPassword: any;
  confirmPassword: any;
  password: any;
  disable: boolean;
};

const SignUpForm = ({
  handleSubmit,
  register,
  errors,
  toggle,
  watchPassword,
  confirmPassword,
  password,
  disable,
}: SignupFormProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
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
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:bg-gray-300"
          disabled={disable}
        >
          <span className="flex item gap-4 justify-center">
            {disable && <img src="spinner/6-dots-rotate.svg" />}
            Sign Up
          </span>
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
