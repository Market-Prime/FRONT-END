import Navbar from "../../../components/Navbar";
import "./Cart.css";
import deletebtn from "../../assets/deletebtn.svg";
import plusbtn from "../../assets/plus-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cart from "../../assets/cart.png";
import cart2 from "../../assets/cart2.png";
import cart3 from "../../assets/cart3.png";

// Sample cartItems data
const cartItems = [
  {
    id: 1,
    name: "Women cotton Top",
    price: 50000,
    size: "M",
    color: "White",
    imageUrl: cart,
  },
  {
    id: 2,
    name: "Women Fashion Bag",
    price: 20000,
    size: "M",
    color: "White",
    imageUrl: cart2,
  },
  {
    id: 3,
    name: "Women Sweat Top",
    price: 30000,
    size: "M",
    color: "Blue",
    imageUrl: cart3,
  },
  {
    id: 4, // Adjusted ID to avoid duplication
    name: "Women Sweat Top",
    price: 30000,
    size: "M",
    color: "Blue",
    imageUrl: cart3,
  },
  {
    id: 5, // Adjusted ID to avoid duplication
    name: "Women Sweat Top",
    price: 30000,
    size: "M",
    color: "Blue",
    imageUrl: cart3,
  },
];

// Function to calculate total amount per item
const calculateTotal = (item, counts) => {
  return item.price * counts[item.id];
};

const Cart = () => {
  // State for item counts
  const [counts, setCounts] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize each item's count to 1
      return acc;
    }, {})
  );

  // Function to calculate the total amount for all items in the cart
  const calculateTotalAmount = (cartItems, counts) => {
    return cartItems.reduce(
      (total, item) => total + calculateTotal(item, counts),
      0
    );
  };

  // Calculate the total amount
  const totalAmount = calculateTotalAmount(cartItems, counts);

  const navigate = useNavigate();

  // Handle checkout and navigate to Checkout page with totalAmount
  const handleCheckout = () => {
    navigate("/cart/checkout", { state: { totalAmount } });
  };

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 1), // Ensure count doesn't go below 1
    }));
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="main-container">
          <div className="cart-container">
            <h2>Cart ({cartItems.length})</h2>
            <hr />
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="image">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="item-image"
                  />
                  <button className="remove-button">
                    <img src={deletebtn} alt="" />
                    <h3>REMOVE</h3>
                  </button>
                </div>
                <div className="item-details">
                  <p className="name">{item.name}</p>
                  <p className="price">₦{item.price.toLocaleString()}</p>
                  <p className="size">Size: {item.size}</p>
                  <p className="color">Color: {item.color}</p>
                </div>
                <hr />
                <div className="item-actions">
                  <p className="price">
                    ₦{calculateTotal(item, counts).toLocaleString()}
                  </p>
                  <button
                    className="subtract"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span>{counts[item.id]}</span>
                  <button
                    className="add"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <hr />
            <p>
              Subtotal <span>₦{totalAmount.toLocaleString()}</span>
            </p>

            <button className="checkout" onClick={handleCheckout}>
              CHECKOUT (₦{totalAmount.toLocaleString()})
            </button>
          </div>
        </div>
        <button className="add-more">
          <img src={plusbtn} alt="" /> Add more items
        </button>
      </div>
    </>
  );
};

export default Cart;
