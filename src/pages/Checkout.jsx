import cart from "../assets/cart-shopping-solid.svg";
import logo from "../assets/Logo 1.png";
import profile from "../assets/user-solid.svg";
import dropdown from "../assets/chevron-down-solid.svg";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 }; // Fetch totalAmount from state

  return (
    <div>
      <div className="navbar">
        <h1>
          <Link to="/Home"> MARKET PRIME</Link>{" "}
          <img src={logo} alt="" className="logo" />
        </h1>

        <div className="title">
          <h3>PAYEMENT</h3>
        </div>

        <div className="others">
          <ul>
            <li>
              <img src={profile} alt="" className="profile" />
              <a href="">Account</a>
              <img src={dropdown} alt="" className="dropdown" />
            </li>
            <li>
              <Link to="/cart">Cart</Link>
              <img src={cart} alt="" className="cart" />
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="container2">
          <div className="address">
            <div className="cus-text">
              <h2>
                <b>{"CUSTOMER'S"} ADDRESS</b>
              </h2>
              <button>
                <h3>Change {">"}</h3>
              </button>
            </div>
            <h4>Fola Shade</h4>
            <p>Plot 7, Aduloju Estate, Akobo |Ibadan, Oyo | +23408302839</p>
          </div>

          <div className="delivery">
            <div className="cus-text2">
              <h3>
                <b>DELIVERY DETAILS</b>
              </h3>
              <button>Change {">"}</button>
            </div>
            <h4>Doorstep Delivery</h4>
            <p>Delivery between Oct 15th and Oct 19th</p>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <br />
            <hr />
            <h4>Items total </h4>
            <h4>Delivery Fee</h4>
            <hr />
            <br />
            <h4>Total</h4>
            <hr />
            <br />
            <div className="coupon">
              <button className="cp">COUPON CODE</button>
              <button>APPLY</button>
            </div>
            <br />
            <Link to="PaymentModal"> <button className="confirm">CONFIRM ORDER</button></Link>
          </div>
          <div className="paym">
            <h2 className="pay-text">CHOOSE A PAYMENT METHOD</h2>
          </div>
          <div className="payment-method">
            <div className="pay1">
              <input type="radio" />
              <label htmlFor="">Pay with USSD or Bank Transfer</label>
            </div>
            <hr />
            <div className="pay2">
              <input type="radio" name="" id="" />
              <label htmlFor="">Pay with MasterCard or Visa Card</label>
              <br />
            </div>
          </div>
        </div>
        <button type="submit" className="pay">
          MAKE PAYMENT: ₦{totalAmount.toLocaleString()}
        </button>
        <p className="warning">
          Do Not send your own Password, Pin, CVV or card details to any email
          or phone number.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
