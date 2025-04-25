// import supabase from "@/utils/supabase";
import { useState } from "react";
import { StockInRecord } from "../../types/formType";

const useStockForm = () => {
  const [formStockIn, setFormStockIn] = useState<StockInRecord>();
  // const [formStockOut, setFormStockOUt] = useState<StockOutRecord>();

  // const StockInRecords = async () => {
  //   // form --> store data to state form --> push to db
  //   try {
  //     const { error } = await supabase.from("stock_in").insert({});

  //     if (error) {
  //       console.log("state stock-in record :", error);
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return { formStockIn, setFormStockIn };
};
export default useStockForm;
