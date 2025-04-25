import { createContext } from "react";
import useInventoryByDay, { defaultInventoryByDay } from "./useInventoryByDay";
import useGuard, { defaultGuard } from "./useGuard";
import useBranches, { defaultBranchProvider } from "./useBranches";
export type GlobalContextType = {
  inventoryByDay: ReturnType<typeof useInventoryByDay>;
  guardProvider: ReturnType<typeof useGuard>;
  branchProvider: ReturnType<typeof useBranches>;
};
export const GlobalContext = createContext<GlobalContextType>({
  inventoryByDay: defaultInventoryByDay,
  guardProvider: defaultGuard,
  branchProvider: defaultBranchProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const inventoryByDay = useInventoryByDay();
  const guardProvider = useGuard();
  const branchProvider = useBranches();
  return (
    <GlobalContext.Provider
      value={{ inventoryByDay, guardProvider, branchProvider }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
