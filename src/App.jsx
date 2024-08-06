import React , {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart/Cart'
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
             <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Home />}></Route>
                <Route path='Shop' element={<Shop />}></Route>
                <Route path='Cart' element={<Cart />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
