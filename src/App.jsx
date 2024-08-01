import React , {useEffect} from 'react';
import './App.css'
import Hero from './Header/Hero';
import About from './About/About';
import HoomeProduct from './HomeProduct/HomeProduct';
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cart from './Cart/Cart';
function App() {
    useEffect(() => {
        AOS.init({
          duration:2000
        });
      }, [])
    return(
        <div>
            <Hero />
            <About />
            <HoomeProduct />
            <Footer />
            <Cart />
        </div>
    )
}

export default App;
