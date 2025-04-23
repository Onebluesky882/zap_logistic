import AllProductTable from "@/components/productTable/AllproductTable";
import InputSearchProduct from "@/components/productTable/InputSearchProduct";
import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";

const ProductsTable = () => {
  const { products, getAllProducts } = useContext(GlobalContext).productsTable;
  useEffect(() => {
    getAllProducts();
  }, [products]);
  return (
    <>
      <h1>Product Table</h1>
      <div className="flex-1 ">
        <InputSearchProduct />
        {products &&
          products.map((item) => (
            <AllProductTable
              key={item.productId}
              productId={item.productId}
              productName={item.productName}
              amount={item.amount}
            />
          ))}
      </div>
    </>
  );
};
export default ProductsTable;
