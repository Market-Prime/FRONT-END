import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "../shared/css/index.css";

import Dashboard from "./pages/DashboardHome";
import AdminLogin from "./pages/AdminLogin";
import SuperadminAccount from "./pages/SuperadminAccount";
import AdminConfirmaccount from "./pages/AdminConfirmaccount";
import ManagerDetails from "./pages/ManagerDetails";
import Managers from "./pages/Managers";
import Vendors from "./pages/Vendors";
import VendorDetails from "./pages/VendorDetails";


const AdminRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/admin">
                <Route index element={<Dashboard />} />

                <Route path="managers" element={<Managers />} />
                <Route path="manager/:staff_id" element={<ManagerDetails />} />

                <Route path="vendors" element={<Vendors />} />
                <Route path="vendor/:store_id" element={<VendorDetails />} />

                <Route
                    path="create-super-admin"
                    element={<SuperadminAccount />}
                />
                <Route
                    path="verify-email/:token"
                    element={<AdminConfirmaccount />}
                />
                <Route path="/admin/login" element={<AdminLogin />} />
            </Route>
        </Routes>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AdminRoutes />
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
