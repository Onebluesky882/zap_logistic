import Auth from "@/auth/login";
import LoginGoogle from "@/components/Login";
const Login = () => {
  const { LoginWithGoogle } = Auth();
  return <LoginGoogle onClick={LoginWithGoogle} />;
};
export default Login;
