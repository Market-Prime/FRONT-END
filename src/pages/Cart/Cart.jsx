import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import cart from "../../assets/cart.png";
import cart2 from "../../assets/cart2.png";
import cart3 from "../../assets/cart3.png";
import deletebtn from "../../assets/deletebtn.svg";
import plusbtn from "../../assets/plus-solid.svg";

const cartItemsData = [
  {
    id: 1,
    name: "Women Cotton Top",
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
];

const calculateTotal = (item, counts) => item.price * counts[item.id];

const Cart = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [counts, setCounts] = useState(
    cartItemsData.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + calculateTotal(item, counts), 0);

  const totalAmount = calculateTotalAmount();

  const handleCheckout = () =>
    navigate("/cart/checkout", { state: { totalAmount } });

  const handleIncrement = (id) =>
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));

  const handleDecrement = (id) =>
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 1),
    }));

  const handleRemove = (id) =>
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const applyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(0.1 * totalAmount);
    } else {
      alert("Invalid Promo Code");
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 bg-gradient-to-b from-blue-100 to-blue-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-blue-900">
                Your Cart is Empty
              </h2>
              <p className="text-blue-600 mt-4">
                Add items to your cart and they’ll appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="md:col-span-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap md:flex-nowrap items-center bg-white shadow-md rounded-lg p-4 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full md:w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="md:ml-6 flex-1 mt-4 md:mt-0 text-center md:text-left">
                      <h2 className="text-lg font-bold text-blue-900">
                        {item.name}
                      </h2>
                      <p className="text-blue-600">Size: {item.size}</p>
                      <p className="text-blue-600">Color: {item.color}</p>
                      <p className="text-blue-800 font-bold">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end space-x-2">
                      <button
                        className="bg-blue-100 text-blue-600 p-2 rounded-full shadow hover:bg-blue-200 transition"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <span className="font-medium text-blue-800">
                        {counts[item.id]}
                      </span>
                      <button
                        className="bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="mt-4 md:mt-0 ml-0 md:ml-4 text-red-500 flex items-center justify-center hover:text-red-600 transition"
                    >
                      <img src={deletebtn} alt="Remove" className="w-5 mr-1" />
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Order Summary
                </h2>
                <div className="flex justify-between text-blue-700 mb-4">
                  <span>Total Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between text-blue-800 mb-6">
                  <span>Total Price</span>
                  <span className="font-bold text-blue-900">
                    ₦{(totalAmount - discount).toLocaleString()}
                  </span>
                </div>
                {discount > 0 && (
                  <p className="text-green-500 font-bold mb-6">
                    Discount Applied: ₦{discount.toLocaleString()}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg mb-4"
                />
                <button
                  onClick={applyPromoCode}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold shadow hover:bg-blue-600 transition"
                >
                  Apply Promo Code
                </button>
                <button
                  onClick={handleCheckout}
                  className="w-full mt-4 bg-blue-600 text-white py-4 rounded-lg font-bold shadow hover:bg-blue-700 transition"
                >
                  Checkout (₦{(totalAmount - discount).toLocaleString()})
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
