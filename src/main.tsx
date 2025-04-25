import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/ui/Layout.tsx";
import Homepage from "./page/Homepage.tsx";
import InventoryByDay from "./page/InventoryByDay.tsx";
import GlobalContextProvider from "./hooks/GlobalContext.tsx";
import Login from "./page/LoginGoogle.tsx";
import Dashboard from "./page/Dashboard.tsx";
import AuthCallback from "./auth/callback.tsx";
import FormStockIn from "./page/FormStockIn.tsx";
import FormStockOut from "./page/FormStockOut.tsx";
import UpdateProfile from "./page/UpdateProfile.tsx";
import Branches from "./page/Branches.tsx";
import WaitingConfirmEmail from "./page/WaitingConfirmEmail.tsx";
import RegisterForm from "./page/SignupWithEmail.tsx";
import LoginWithEmail from "./page/LoginWithEmail.tsx";

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
            <Route path="form-stock-out" element={<FormStockOut />} />
            <Route path="auth/callback" element={<AuthCallback />} />
            <Route path="branches" element={<Branches />} />
            <Route path="login-email" element={<LoginWithEmail />} />
            <Route path="signup" element={<RegisterForm />} />
            <Route
              path="waiting-confirm-email"
              element={<WaitingConfirmEmail />}
            />

            {/* todo after signup --> comfirm gmail should redirect to <UpdateProfile/>  */}
            <Route path="update-profile" element={<UpdateProfile />} />
            {/* <Route path="form-stock-in" element={<FormStockIn />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </StrictMode>
  </GlobalContextProvider>
);
