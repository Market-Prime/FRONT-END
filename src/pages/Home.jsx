import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HoomeProduct from "../components/HomeProduct/HomeProduct";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <About />
        <HoomeProduct />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
