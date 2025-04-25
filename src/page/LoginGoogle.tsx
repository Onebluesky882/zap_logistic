import LoginWithGoogle from "@/auth/loginWithGoogle";
import LoginGoogle from "@/components/Login";
const Login = () => {
  const { auth } = LoginWithGoogle();
  return <LoginGoogle onClick={auth} />;
};
export default Login;
