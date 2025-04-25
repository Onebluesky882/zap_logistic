import { useNavigate } from "react-router-dom";

const WaitingConfirmEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Check your email ✉️
        </h2>
        <p className="text-gray-600 mb-6">
          We’ve sent a confirmation link to your email. <br />
          Please confirm your account to continue.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default WaitingConfirmEmail;
