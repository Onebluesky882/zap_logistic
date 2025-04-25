import supabase from "@/utils/supabase";
import { useState } from "react";
import { StockInRecord, StockOutRecord } from "../../types/formType";

const useStockForm = () => {
  const [mode, setMode] = useState<"in" | "out">("in");
  const [formStockIn, setFormStockIn] = useState<StockInRecord>({
    product_id: "",
    quantity_in: 0,
  });
  const [formStockOut, setFormStockOUt] = useState<StockOutRecord>({
    product_id: "",
    quantity_out: 0,
  });

  const StockInRecords = async () => {
    // form --> store data to state form --> push to db
    try {
      const { error } = await supabase.from("stock_in").insert({});

      if (error) {
        console.log("state stock-in record :", error);
      }
    } catch (error) {
      alert(error);
    }
  };
  const StockOutRecords = async () => {
    // get data from product
    // todo
    // const localData = items.map((item) => transformKeysToSnakeCase(item));
    // send
  };
  return { formStockIn, setFormStockIn };
};
export default useStockForm;
