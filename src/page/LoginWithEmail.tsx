import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormInput } from "../../types/usertype";
import LoginForm from "@/components/LoginForm";

const LoginWithEmail = () => {
  const navigate = useNavigate();

  const [disable, setDisable] = useState(false);

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
    setDisable(true);
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      alert("failed !! please try again ");
      return;
    } else {
      setDisable(false);
      navigate("/");
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      disable={disable}
    />
  );
};
export default LoginWithEmail;
