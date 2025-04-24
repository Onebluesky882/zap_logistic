import useInventoryByDay from "@/hooks/useInventoryByDay";

const AddProduct = () => {
  const { insertProduct } = useInventoryByDay();
  return (
    <div className="flex-1 bg-amber-200">
      <h1>addProduct</h1>

      <button
        onClick={() => {
          insertProduct();
        }}
      >
        เพิ่มรายการสินค้า
      </button>
    </div>
  );
};
export default AddProduct;
