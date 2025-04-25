import { useEffect } from "react";
import { useNavigate } from "react-router";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.slice(1));
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      window.history.replaceState(null, "", "/dashboard");

      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <p>Logging in...</p>;
};

export default AuthCallback;
