import { useForm } from "react-hook-form";

type ProfileForm = {
  firstName: string;
  lastName: string;
  address: string;
  contact: string;
  age: number;
  emergencyContact: string;
  additionalInfo: string;
};

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>();

  const onSubmit = (data: ProfileForm) => {
    console.log("Profile Updated:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          อัปเดตข้อมูลส่วนตัว
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                ชื่อ
              </label>
              <input
                type="text"
                {...register("firstName", { required: "กรุณากรอกชื่อ" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="ชื่อจริง"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                นามสกุล
              </label>
              <input
                type="text"
                {...register("lastName", { required: "กรุณากรอกนามสกุล" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="นามสกุล"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              ที่อยู่
            </label>
            <textarea
              {...register("address")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="ที่อยู่ปัจจุบัน"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                เบอร์โทรติดต่อ
              </label>
              <input
                type="text"
                {...register("contact")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="เช่น 0812345678"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm text-gray-700">
                อายุ
              </label>
              <input
                type="number"
                {...register("age")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="อายุ"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              เบอร์ติดต่อฉุกเฉิน
            </label>
            <input
              type="text"
              {...register("emergencyContact")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="เช่น 0812345678"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              ข้อมูลเพิ่มเติม
            </label>
            <textarea
              {...register("additionalInfo")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="โรคประจำตัว / หมายเหตุอื่นๆ"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            บันทึกข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
