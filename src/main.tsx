import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/ui/Layout.tsx";
import Homepage from "./page/Homepage.tsx";
import ProductsTable from "./page/ProductsTable.tsx";
import GlobalContextProvider from "./hooks/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalContextProvider>
    <StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product-table" element={<ProductsTable />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StrictMode>
  </GlobalContextProvider>
);
