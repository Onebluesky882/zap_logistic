import { Button } from "@/components/ui/button";
type LoginProp = {
  onClick: () => void;
};
const LoginWithGoogle = ({ onClick }: LoginProp) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="/login.jpg"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="p-10 flex flex-col justify-center items-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome</h2>
          <p className="text-gray-500 text-center max-w-xs">
            Sign in to continue managing your inventory and logistics data.
          </p>
          <Button
            onClick={onClick}
            className="flex items-center space-x-3 bg-white border border-gray-300 px-6 py-3 shadow hover:shadow-lg transition"
          >
            <img src="google.webp" alt="Google Logo" className="w-5 h-5" />

            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
