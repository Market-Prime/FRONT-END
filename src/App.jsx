import React , {useEffect} from 'react';
import './App.css'
import Hero from './Header/Hero';
import About from './About/About';
import HoomeProduct from './HomeProduct/HomeProduct';
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        </div>
    )
}

export default App;
