import { createContext } from "react";
import useProductsTable, { defaultProductTable } from "./useProductsTable";
export type GlobalContextType = {
  productsTable: ReturnType<typeof useProductsTable>;
};
export const GlobalContext = createContext<GlobalContextType>({
  productsTable: defaultProductTable,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const productsTable = useProductsTable();
  return (
    <GlobalContext.Provider value={{ productsTable }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
