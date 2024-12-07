// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart/Cart";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Checkout from "./pages/Checkout";
// import VirtualTryOn from "./pages/VirtualTryOn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import SearchFilter from "./pages/SearchFilter/SearchFilter";
// // import Emailverification from "./pages/Emailverification";
// import EmailConfirmation from "./pages/EmailConfirmation";
// import ProductDescription from "./pages/ProductDescription/ProductDescription";
// import PaymentModal from "./pages/PaymentModal";
// import PaymentConfirmation from "./pages/PaymentConfirmation";
// import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
// import Product from "./pages/AdminDashboard/Product";
// import Orders from "./pages/AdminDashboard/Orders";
// import VendorsAccount from "./pages/VendorsPage/VendorsAccount";
// import VendorsLogin from "./pages/VendorsPage/VendorsLogin";
// import VendorsVerifyEmail from "./pages/VendorsPage/VendorsVerifiedEmail";
// import FinalSection from "./pages/VendorsPage/FinalSection";
// import VendorDashboard from "./pages/VendorsPage/VendorDashboard";
// import Product2 from "./pages/VendorsPage/Product2";
// import Content from "./pages/VendorsPage/Content";
// import ForgotPassword from "./pages/ForgotPassword";
// import { AuthProvider } from "./pages/AuthContext";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000,
//     });
//   }, []);

//   return (
//     <div>
//       <BrowserRouter>
//         <AnimatedRoutes />
//       </BrowserRouter>
//     </div>
//   );
// }

// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <AuthProvider>
//        <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Cart/Checkout" element={<Checkout />} />
//         <Route path="/VirtualTryOn" element={<VirtualTryOn />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         {/* <Route path="/Emailverification" element={<Emailverification />} /> */}

//         <Route path="/email-confirmation/:token" element={<EmailConfirmation />} />

//         <Route path="/Login/Register" element={<Signup />} />
//         <Route path="/Cart/Checkout/PaymentModal" element={<PaymentModal />} />
//         <Route
//           path="/Cart/Checkout/PaymentModal/PaymentConfirmation"
//           element={<PaymentConfirmation />}
//         />
//         {/* <Route
//           path="/Login/Register/Emailverification/:token"
//           element={<Emailverification />}
//         /> */}
//         <Route
//           path="/Login/Register/Emailverification/EmailConfirmation/:token"
//           element={<EmailConfirmation />}
//         />

//         <Route
//           path="/ForgotPassword" element={<ForgotPassword />}
//         />
//         <Route path="/Search" element={<SearchFilter />} />
//         <Route path="/ProductDescription" element={<ProductDescription />} />

//         {/* Dashboard Route with nested routes */}
//         <Route path="/VendorDashboard" element={<VendorDashboard />}>
//           <Route index element={<Content />} /> {/* Default content */}
//           <Route path="Product" element={<Product2 />} />
//           <Route path="Orders" element={<Orders />} />
//         </Route>

//         <Route path="/VendorsAccount" element={<VendorsAccount />} />
//         <Route path="/VendorsLogin" element={<VendorsLogin />} />
//         <Route path="/VendorsVerifiedEmail" element={<VendorsVerifyEmail />} />
//         <Route path="/FinalSection" element={<FinalSection />} />
//         <Route path="/AdminDashboard" element={<AdminDashboard />} />
//         <Route path="/AdminDashboard/Product" element={<Product />} />
//         <Route path="/AdminDashboard/Orders" element={<Orders />} />

//       </Routes>
//     </AnimatePresence>
//     </AuthProvider>

//   );
// }

// export default App;

// New code
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import Checkout from "./pages/Checkout";
import VirtualTryOn from "./pages/VirtualTryOn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchFilter from "./pages/SearchFilter/SearchFilter";
import EmailConfirmation from "./pages/EmailConfirmation";
import ProductDescription from "./pages/ProductDescription/ProductDescription";
import PaymentModal from "./pages/PaymentModal";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import DashboardHome from "./pages/AdminDashboard/DashboardHome";
import Product from "./pages/AdminDashboard/Product";
import Orders from "./pages/AdminDashboard/Orders";
import VendorDashboard from "../src/pages/VendorsPage/Content";
import VendorsAccount from "./pages/VendorsPage/VendorsAccount";
import VendorOrders from "../src/pages/VendorsPage/VendorOrders";
import VendorsLogin from "./pages/VendorsPage/VendorsLogin";
import Vendoremailconfirmation from "./pages/VendorsPage/Vendoremailconfirmation";
import VendorsVerifyEmail from "./pages/VendorsPage/VendorsVerifiedEmail";
import FinalSection from "./pages/VendorsPage/FinalSection";
import SetupKYC from "./pages/VendorsPage/SetupKYC";
import SetupStore from "./pages/VendorsPage/SetupStore";
import Product2 from "./pages/VendorsPage/Product2";
import Content from "./pages/VendorsPage/Content";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./pages/AuthContext";
import Accountmanagement from "./pages/Accountmanagement";
import ResetPassword from "./pages/ResetPassword";
import SuperadminAccount from "./pages/AdminDashboard/SuperadminAccount";
import AdminConfirmaccount from "./pages/AdminDashboard/AdminConfirmaccount";
import AdminLogin from "./pages/AdminDashboard/AdminLogin";
// import VendorsVerifyEmail from "./pages/VendorsPage/VendorsVerifiedEmail";




import "./styles/global.css";
import "./styles/adminDashboard.css";
import Dashboard from "./pages/AdminDashboard/DashboardHome";
import Managers from "./pages/AdminDashboard/Managers";
import ManagerDetails from "./pages/AdminDashboard/ManagerDetails";
import Vendors from "./pages/AdminDashboard/Vendors";
import VendorDetails from "./pages/AdminDashboard/VendorDetails";


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
          <Route path="/finalsection" element={<FinalSection />} />

          {/* Dashboard Route with nested routes */}
          <Route path="/vendordashboard" element={<VendorDashboard />}>
            <Route index element={<Content />} /> {/* Default content */}
            <Route path="product" element={<Product2 />} />
            <Route path="orders" element={<Orders />} />
          </Route>


          <Route path="/vendorsaccount" element={<VendorsAccount />} />
          <Route path="/vendorslogin" element={<VendorsLogin />} />
          <Route path="/vendorSetupKYC" element={<SetupKYC />} />
          <Route path="/vendorSetupStore" element={<SetupStore />} />
          <Route
            path="/vendorsverifiedemail"
            element={<VendorsVerifyEmail />}
          />

          <Route path="/finalsection" element={<FinalSection />} />
          <Route path="/account" element={<Accountmanagement />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />

          
          {/* ------ Admin routes ----- */}
          <Route path="/admin">
            <Route index element={<Dashboard />} />

            <Route path="managers" element={<Managers />} />
            <Route path="manager/:staff_id" element={<ManagerDetails />}/>

            <Route path="vendors" element={<Vendors />} />
            <Route path="vendor/:store_id" element={<VendorDetails />}/>

            {/* ------ Auth routes for admin ----- */}
            <Route path="create-super-admin" element={<SuperadminAccount />} /> 
            <Route path="verify-email/:token" element={<AdminConfirmaccount />}/>
            <Route path="login" element={<AdminLogin />} />
          </Route>
          
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
