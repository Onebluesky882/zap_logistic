import ProductsTableProps, {
  Head,
} from "@/components/productTable/ProductsTableProps";
import { TableBody } from "@/components/ui/table";

import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";

const InventoryByDay = () => {
  const { products, getInventoryByDate } =
    useContext(GlobalContext).inventoryByDay;
  const { user, Guard } = useContext(GlobalContext).guardProvider;
  console.log("products :", products);
  useEffect(() => {
    getInventoryByDate();
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
                    productName={item.productsName}
                    stockIn={item.quantityIn}
                    stockOut={item.quantityOut}
                    amount={item.productAmount}
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
export default InventoryByDay;
