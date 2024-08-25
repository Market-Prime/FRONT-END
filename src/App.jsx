import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import Checkout from "./pages/Checkout";
import VirtualTryOn from "./pages/VirtualTryOn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Cart/Checkout" element={<Checkout />} />
        <Route path="VirtualTryOn" element={<VirtualTryOn />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
