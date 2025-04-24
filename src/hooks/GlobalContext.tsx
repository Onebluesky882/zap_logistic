import { createContext } from "react";
import useInventoryByDay, { defaultInventoryByDay } from "./useInventoryByDay";
import useGuard, { defaultGuard } from "./useGuard";
export type GlobalContextType = {
  inventoryByDay: ReturnType<typeof useInventoryByDay>;
  guardProvider: ReturnType<typeof useGuard>;
};
export const GlobalContext = createContext<GlobalContextType>({
  inventoryByDay: defaultInventoryByDay,
  guardProvider: defaultGuard,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const inventoryByDay = useInventoryByDay();
  const guardProvider = useGuard();
  return (
    <GlobalContext.Provider value={{ inventoryByDay, guardProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
