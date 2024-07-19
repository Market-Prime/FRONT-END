import React from 'react';
import './App.css'
import Hero from './Header/Hero';
import About from './About/About';
import HoomeProduct from './HomeProduct/HomeProduct';
import Footer from './Footer/Footer'
function App() {
    return(
        <div>
            <Hero />
            <About />
            <HoomeProduct />
            <Footer />
        </div>
    )
}

export default App;
