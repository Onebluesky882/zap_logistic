import ProductsTableProps, {
  Head,
} from "@/components/productTable/ProductsTableProps";
import { TableBody } from "@/components/ui/table";

import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";

const ProductsTable = () => {
  const { products, getAllProducts } = useContext(GlobalContext).productsTable;
  const { user, Guard } = useContext(GlobalContext).guardProvider;

  useEffect(() => {
    getAllProducts();
    Guard();
  }, []);
  const date = new Date().toLocaleDateString();
  return (
    <>
      {!user ? (
        <div>Need login</div>
      ) : (
        <div className="p-2">
          <h2 className="font-extrabold text-xl p-2">วันที่ : {date}</h2>

          <div className="rounded-xl shadow-lg border border-border overflow-x-auto">
            <table className="min-w-full divide-y divide-border text-sm text-left">
              <Head />

              <TableBody>
                {products.map((item) => (
                  <ProductsTableProps
                    key={item.productId}
                    productId={item.productId}
                    productName={item.productName}
                    stockIn={item.amount}
                    stockOut={item.amount}
                    amount={item.amount}
                  />
                ))}
              </TableBody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductsTable;
