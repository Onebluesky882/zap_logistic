import { useState } from "react";
import { InsertProductType } from "../../types/inventory_items";
import supabase from "@/utils/supabase";

import { transformKeysToCamelCase } from "@/utils/string";

const useProductsTable = () => {
  const [addItem, setAddItem] = useState<InsertProductType[]>([]);
  const [products, setProducts] = useState<InsertProductType[]>([]);

  // get all product
  const getAllProducts = async () => {
    try {
      const { data } = await supabase.from("inventory_items").select();

      if (data) {
        const transformData = data.map((item) =>
          transformKeysToCamelCase(item)
        );
        setProducts(transformData);
      }
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

  return { products, setAddItem, getAllProducts, insertProduct, setProducts };
};
export default useProductsTable;

export const defaultProductTable = {
  products: [],
  setAddItem: () => {}, // provide dummy no-op functions
  setProducts: () => {},
  getAllProducts: async () => {},
  insertProduct: async () => {},
};
