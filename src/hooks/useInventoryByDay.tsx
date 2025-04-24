import { useState } from "react";
import { InsertProductType } from "../../types/products";
import supabase from "@/utils/supabase";

import { transformKeysToCamelCase } from "@/utils/string";
import { InventoryDayType } from "types/inventory_items";

const useInventoryByDay = () => {
  const [addItem, setAddItem] = useState<InsertProductType[]>([]);
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

  // insert
  const insertProduct = async () => {
    // get data from product
    // todo
    // const localData = items.map((item) => transformKeysToSnakeCase(item));

    // send
    const { error } = await supabase.from("inventory_items").insert(addItem);
    if (error) {
      console.log("insert error", error);
    } else {
      console.log("successful");
    }
  };

  // update  Product

  // delete product s

  return {
    products,
    setAddItem,
    getInventoryByDate,
    insertProduct,
    setProducts,
  };
};
export default useInventoryByDay;

export const defaultInventoryByDay = {
  products: [],
  setAddItem: () => {}, // provide dummy no-op functions
  setProducts: () => {},
  getInventoryByDate: async () => {},
  insertProduct: async () => {},
};
