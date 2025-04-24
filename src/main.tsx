import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/ui/Layout.tsx";
import Homepage from "./page/Homepage.tsx";
import InventoryByDay from "./page/InventoryByDay.tsx";
import GlobalContextProvider from "./hooks/GlobalContext.tsx";
import Login from "./page/Login.tsx";
import Dashboard from "./page/Dashboard.tsx";
import FormStockIn from "./page/FormStockIn.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalContextProvider>
    <StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product-table" element={<InventoryByDay />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="form-stock-in" element={<FormStockIn />} />
            {/* <Route path="form-stock-in" element={<FormStockIn />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </StrictMode>
  </GlobalContextProvider>
);
