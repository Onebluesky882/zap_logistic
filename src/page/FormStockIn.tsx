import { GlobalContext } from "@/hooks/GlobalContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { StockInRecord } from "types/formType";

export default function StockInForm() {
  const { readAllBranches } = useContext(GlobalContext).branchProvider;

  useEffect(() => {
    readAllBranches();
  }, []);

  // const { formStockIn, setFormStockIn } = useStockForm();
  const { register, handleSubmit } = useForm<StockInRecord>({});

  const onSubmit = (data: StockInRecord) => {
    console.log("form data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("branch_id")} placeholder="branch Id" />
      <button type="submit">Submit</button>
    </form>
  );
}
