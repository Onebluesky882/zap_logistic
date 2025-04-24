import { createContext } from "react";
import useProductsTable, { defaultProductTable } from "./useProductsTable";
import useGuard, { defaultGuard } from "./useGuard";
export type GlobalContextType = {
  productsTable: ReturnType<typeof useProductsTable>;
  guardProvider: ReturnType<typeof useGuard>;
};
export const GlobalContext = createContext<GlobalContextType>({
  productsTable: defaultProductTable,
  guardProvider: defaultGuard,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const productsTable = useProductsTable();
  const guardProvider = useGuard();
  return (
    <GlobalContext.Provider value={{ productsTable, guardProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
