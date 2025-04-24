import AllProductTable from "@/components/productTable/AllproductTable";
import InputSearchProduct from "@/components/productTable/InputSearchProduct";
import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";
import useGuard from "@/hooks/useGuard";

const ProductsTable = () => {
  const { products, getAllProducts } = useContext(GlobalContext).productsTable;
  const { user, Guard } = useContext(GlobalContext).guardProvider;
  useEffect(() => {
    getAllProducts();
    Guard();
  }, [products]);
  return (
    <>
      {!user ? (
        <div>Need login</div>
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};
export default ProductsTable;
