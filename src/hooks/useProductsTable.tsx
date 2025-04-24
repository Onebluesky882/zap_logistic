import { useState } from "react";
import { InsertProductType, ProductSummaryType } from "../../types/products";
import supabase from "@/utils/supabase";

import { transformKeysToCamelCase } from "@/utils/string";

const useProductsTable = () => {
  const [addItem, setAddItem] = useState<InsertProductType[]>([]);
  const [products, setProducts] = useState<ProductSummaryType[]>([]);

  // get all product
  const getAllProducts = async () => {
    try {
      const { data: items } = await supabase
        .from("inventory_items")
        .select()
        .order("amount", { ascending: true });

      const { data: stockIn } = await supabase.from("stock_in").select();
      const { data: stockOut } = await supabase.from("stock_out").select();

      const stockInNew = new Map(
        stockIn?.find((s) => [s.product_id, s.quantity]) ?? []
      );
      const stockOutNew = new Map(
        stockOut?.find((s) => [s.product_id, s.quantity]) ?? []
      );

      const result: ProductSummaryType[] = (items ?? []).map((item) => ({
        ...item,
        quantityIn: stockInNew,
        quantityOut: stockOutNew,
      }));
      console.log("result :", result);
      const transform = transformKeysToCamelCase(result);

      console.log("transform :", transform);
      setProducts(transform);
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
