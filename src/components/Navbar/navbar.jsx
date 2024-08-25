// import { Link } from 'react-router-dom';
// import './navbar.css'
// import logo from '../../assets/Logo 1.png'
// import profile from '../../assets/user-solid.svg'
// import dropdown from '../../assets/chevron-down-solid.svg'
// import cart from '../../assets/cart-shopping-solid.svg'

// const navbar = () => {


//   return (
//     <div className='navbar'>
      
//         <h1> <Link to='/Home'> MARKET PRIME</Link> <img src={logo} alt="" className='logo'/></h1>
      

//       <div className="search-box">
//         <form action="">
//         <input type="text" placeholder='Search products, brands and categories' />
//         <button><h2>Search</h2></button>
//         </form>
//       </div>

//       <div className="others">
//         <ul>
        
//             <li><img src={profile} alt="" className='profile'/><Link to="Login">Account</Link><img src={dropdown} alt="" className='dropdown'/></li>
//             <li><Link to="/cart">Cart</Link><img src={cart} alt="" className='cart'/></li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default navbar



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/Logo 1.png';
import profile from '../../assets/user-solid.svg';
import dropdown from '../../assets/chevron-down-solid.svg';
import cart from '../../assets/cart-shopping-solid.svg';
// import LoginModal from '../../pages/Login';
import Login from '../../pages/Login';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='navbar'>
      <h1>
        <Link to='/Home'> MARKET PRIME</Link>
        <img src={logo} alt="" className='logo'/>
      </h1>

      <div className="search-box">
        <form action="">
          <input type="text" placeholder='Search products, brands and categories' />
          <button><h2>Search</h2></button>
        </form>
      </div>

      <div className="others">
        <ul>
          <li onClick={toggleModal}>
            <img src={profile} alt="" className='profile'/>
            <Link to="#">Account</Link>
            <img src={dropdown} alt="" className='dropdown'/>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <img src={cart} alt="" className='cart'/>
          </li>
        </ul>
      </div>

      {showModal && <Login toggleModal={toggleModal} />}
    </div>
  );
};

export default Navbar;
