import { useState } from "react";
import supabase from "@/utils/supabase";

import { transformKeysToCamelCase } from "@/utils/string";
import { InventoryDayType } from "../../types/inventoryType";

const useInventoryByDay = () => {
  const [products, setProducts] = useState<InventoryDayType[]>([]);

  // get all product
  const getInventoryByDate = async () => {
    try {
      const { data: inventory } = await supabase
        .from("inventory_by_day")
        .select();
      const { data: items } = await supabase.from("inventory_items").select();

      const merged = inventory?.map((inv) => {
        const match = items?.find((item) => item.product_id === inv.product_id);
        return {
          ...inv,
          products_name: match.product_name ?? "",
        };
      });
      console.log("merged :", merged);

      const transform = transformKeysToCamelCase(merged);
      setProducts(transform ?? []);
    } catch (error) {
      alert("something wrong");
    }
  };

  // get product by id or name

  // update  Product

  // delete product s

  return {
    products,
    getInventoryByDate,

    setProducts,
  };
};
export default useInventoryByDay;

export const defaultInventoryByDay = {
  products: [],
  setProducts: () => {},
  getInventoryByDate: async () => {},
  insertProduct: async () => {},
};
