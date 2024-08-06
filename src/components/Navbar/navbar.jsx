import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo 1.png'
import profile from '../../assets/user-solid.svg'
import dropdown from '../../assets/chevron-down-solid.svg'
import cart from '../../assets/cart-shopping-solid.svg'

const navbar = () => {


  return (
    <div className='navbar'>
      <div className="logo-box">
        <h1>MARKET PRIME</h1>
        <img src={logo} alt="" className='logo'/>
      </div>

      <div className="search-box">
        <form action="">
        <input type="text" placeholder='Search products, brands and categories' />
        <button><h2>Search</h2></button>
        </form>
      </div>

      <div className="others">
        <ul>
        
            <li><img src={profile} alt="" className='profile'/><a href="">Account</a> <img src={dropdown} alt="" className='dropdown'/></li>
            <li><a href="">Cart</a><img src={cart} alt="" className='cart'/></li>
        </ul>
      </div>
    </div>
  )
}

export default navbar
