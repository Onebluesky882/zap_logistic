import supabase from "@/utils/supabase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import SignUpForm from "@/components/SignUpform";
import { register } from "module";
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
  const [disable, setDisable] = useState(false);

  const toggle = () => {
    console.log("click");
    setWatchPassword((prev) => !prev);
  };

  const onSubmit = async (data: Register) => {
    setDisable(true);
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
      setDisable(false);
      navigate("/waiting-confirm-email");
    }
  };
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  return (
    <SignUpForm
      handleSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      toggle={toggle}
      watchPassword={watchPassword}
      confirmPassword={confirmPassword}
      password={password}
      disable={disable}
    />
  );
}
