import Navbar from '../../components/Navbar/navbar'
import './Cart.css'; 
import cart from '../../assets/cart.png'
import cart2 from '../../assets/cart2.png'
import cart3 from '../../assets/cart3.png'
import { useState } from 'react'


const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Women cotton Top',
      price: 50000,
      size: 'M',
      color: 'White',
      imageUrl: cart,
    },
    {
      id: 2,
      name: 'Women Fashion Bag',
      price: 20000,
      size: 'M',
      color: 'White',
      imageUrl: cart2, // replace with actual image URL
    },
    {
      id: 3,
      name: 'Women Sweat Top',
      price: 30000,
      size: 'M',
      color: 'Blue',
      imageUrl: cart3
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const [count, setCount] = useState(0)

  return (
    
    <div className="cart-page">
      <Navbar />
      
      <div className="main-container">
        <div className="cart-container">
          <h2>Cart ({cartItems.length})</h2>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <div className="item-text">
                <p className='name'>{item.name}</p>
                <p className='price'>₦{item.price}</p>
                <p className='price2'>₦{item.price}</p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                </div>
                <div className="item-actions">
                  <button className='subtract' onClick={() => setCount(count - 1)}>-</button>
                  <span>{count}</span>
                  <button className='add' onClick={() => setCount(count + 1)}>+</button>
                  <button>REMOVE</button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <hr />
          <p>Subtotal <span> ₦{totalAmount}</span></p>
          <button className="checkout">CHECKOUT (₦{totalAmount})</button>
        </div>
      </div>
      <button className="add-more">+ Add more items</button>
    </div>
  );
};

export default Cart;
