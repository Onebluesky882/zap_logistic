import React from "react";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">ลงทะเบียน</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              ชื่อ
            </label>
            <input
              type="text"
              {...register("name", { required: "กรุณากรอกชื่อ" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ชื่อของคุณ"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              อีเมล
            </label>
            <input
              type="email"
              {...register("email", {
                required: "กรุณากรอกอีเมล",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "รูปแบบอีเมลไม่ถูกต้อง",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              รหัสผ่าน
            </label>
            <input
              type="password"
              {...register("password", {
                required: "กรุณากรอกรหัสผ่าน",
                minLength: {
                  value: 6,
                  message: "รหัสผ่านอย่างน้อย 6 ตัวอักษร",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg transition"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  );
}
