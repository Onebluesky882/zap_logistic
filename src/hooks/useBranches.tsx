import { useState } from "react";
import { Branch } from "../../types/branches";
import supabase from "@/utils/supabase";
import { transformKeysToCamelCase } from "@/utils/string";

const useBranches = () => {
  const [branches, setBranches] = useState<Branch[]>([]);

  // get
  const readAllBranches = async () => {
    const { data } = await supabase.from("branches").select();
    if (data) {
      const transform = transformKeysToCamelCase(data);
      setBranches(transform);
    }
  };

  return { branches, readAllBranches };
};

export const defaultBranchProvider = {
  branches: [],
  readAllBranches: async () => {},
};
export default useBranches;
