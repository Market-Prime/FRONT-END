import React from 'react';
import './Cart.css'; // Create a CSS file for styling

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Women cotton Top',
      price: 50000,
      size: 'M',
      color: 'White',
      imageUrl: 'link-to-image', // replace with actual image URL
    },
    {
      id: 2,
      name: 'Women Fashion Bag',
      price: 20000,
      size: 'M',
      color: 'White',
      imageUrl: 'link-to-image', // replace with actual image URL
    },
    {
      id: 3,
      name: 'Women Sweat Top',
      price: 30000,
      size: 'M',
      color: 'Blue',
      imageUrl: 'link-to-image', // replace with actual image URL
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <header className="header">
        <h1>MARKET PRIME</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search products, brands and categories" />
          <button>Search</button>
        </div>
        <div className="account-cart">
          <span>Account</span>
          <span>Cart</span>
        </div>
      </header>
      <div className="main-container">
        <div className="cart-container">
          <h2>Cart ({cartItems.length})</h2>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>#{item.price}</p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <div className="item-actions">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                  <button>REMOVE</button>
                </div>
              </div>
            </div>
          ))}
          <button className="add-more">+ Add more items</button>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: #{totalAmount}</p>
          <button className="checkout">CHECKOUT (#{totalAmount})</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
