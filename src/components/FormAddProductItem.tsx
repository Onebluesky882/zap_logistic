type FormProps = {
  productId: string;
  productName: string;
  amount: number;
};
const handleChange = () => {
  // todo
  return;
};
const FormAddProductItem = ({ productId, amount, productName }: FormProps) => {
  const handleForm = async (formData: FormData) => {
    const id = formData.get("productId");
    const name = formData.get("productName");
    const amount = formData.get("amount");
  };

  return (
    <form
      action={handleForm}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product ID
        </label>
        <input
          type="text"
          name="product_id"
          value={productId}
          onChange={handleChange}
          required
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          name="product_name"
          value={productName}
          onChange={handleChange}
          required
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          required
          min={0}
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default FormAddProductItem;
