import useProductsTable from "@/hooks/useProductsTable";

const AddProduct = () => {
  const { insertProduct } = useProductsTable();
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
