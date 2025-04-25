import useStockForm from "@/hooks/useStockForm";
import { useForm } from "react-hook-form";
import { StockInRecord } from "types/formType";

export default function StockInForm() {
  const { formStockIn, setFormStockIn } = useStockForm();
  const { register, handleSubmit } = useForm<StockInRecord>({
    defaultValues: {
      product_id: "",
      quantity_in: null,
    },
  });

  const onSubmit = (data: StockInRecord) => {
    console.log("Submitted:", {
      ...data,
      quantity_in: data.quantity_in ? Number(data.quantity_in) : null,
    });

    setFormStockIn(data);
    console.log(formStockIn);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Stock In</h2>

      {/* Product ID */}
      <div>
        <label className="block text-sm font-medium mb-1">Product ID</label>
        <input
          type="text"
          {...register("product_id")}
          placeholder="Enter product ID"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity In */}
      <div>
        <label className="block text-sm font-medium mb-1">Quantity In</label>
        <input
          type="number"
          {...register("quantity_in", { valueAsNumber: true })}
          placeholder="Enter quantity"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
