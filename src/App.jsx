import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./main/pages/Home";
import Cart from "./main/pages/Cart/Cart";
import Checkout from "./main/pages/Checkout";
import VirtualTryOn from "./main/pages/VirtualTryOn";
import Login from "./main/pages/Login";
import Signup from "./main/pages/Signup";
import SearchFilter from "./main/pages/SearchFilter/SearchFilter";
import EmailConfirmation from "./main/pages/EmailConfirmation";
import ProductDescription from "./main/pages/ProductDescription/ProductDescription";
import PaymentModal from "./main/pages/PaymentModal";
import PaymentConfirmation from "./main/pages/PaymentConfirmation";
import ForgotPassword from "./main/pages/ForgotPassword";
import { AuthProvider } from "./main/pages/AuthContext";
import Accountmanagement from "./main/pages/Accountmanagement";
import ResetPassword from "./main/pages/ResetPassword";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AuthProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/virtualtryon" element={<VirtualTryOn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/email-confirmation/:token"
            element={<EmailConfirmation />}
          />
          <Route path="/login/register" element={<Signup />} />
          <Route
            path="/cart/checkout/paymentmodal"
            element={<PaymentModal />}
          />
          <Route
            path="/cart/checkout/paymentmodal/paymentconfirmation"
            element={<PaymentConfirmation />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/productdescription" element={<ProductDescription />} />

          <Route path="/account" element={<Accountmanagement />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./pages/Cart/Cart";

// import "./styles/global.css";
// import "./styles/adminDashboard.css";
// import Dashboard from "./pages/AdminDashboard/DashboardHome";
// import Managers from "./pages/AdminDashboard/Managers";
// import ManagerDetails from "./pages/AdminDashboard/ManagerDetails";
// import Vendors from "./pages/AdminDashboard/Vendors";
// import VendorDetails from "./pages/AdminDashboard/VendorDetails";
// import { AuthProvider } from "./pages/AuthContext";

// const App = () => {

//     const Home = React.lazy(()=> import("./pages/Home"))
//     const Cart = React.lazy(()=> import("./pages/Cart/Cart"))

//     return (
//         <AuthProvider>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/cart" element={<Cart />} />
//                     <Route path="/admin">
//                         <Route index element={<Dashboard />} />
//                         <Route path="managers" element={<Managers />} />
//                         <Route
//                             path="manager/:staff_id"
//                             element={<ManagerDetails />}
//                         />
//                         <Route path="vendors" element={<Vendors />} />
//                         <Route
//                             path="vendor/:store_id"
//                             element={<VendorDetails />}
//                         />

//                         {/* ------ Auth routes for admin ----- */}
//                         {/* <Route
//                         path="create-super-admin"
//                         element={<SuperadminAccount />}
//                     />
//                     <Route
//                         path="verify-email/:token"
//                         element={<AdminConfirmaccount />}
//                     /> */}
//                         {/* <Route path="login" element={<AdminLogin />} /> */}
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </AuthProvider>
//     );
// };

// export default App;
