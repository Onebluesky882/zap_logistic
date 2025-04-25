type SignInFormProps = {
  handleSubmit: (onSubmit: any) => void;
  register: any;
  disable: boolean;
};

const LoginForm = ({ handleSubmit, register, disable }: SignInFormProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
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
          disabled={disable}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition  disabled:bg-gray-300"
        >
          <span className="flex item gap-4 justify-center">
            {disable && <img src="spinner/6-dots-rotate.svg" />}
            Sign In
          </span>
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
