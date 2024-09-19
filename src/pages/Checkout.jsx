import cart from "../assets/cart-shopping-solid.svg";
import logo from "../assets/Logo 1.png";
import profile from "../assets/user-solid.svg";
import dropdown from "../assets/chevron-down-solid.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { IoCalculatorOutline } from "react-icons/io5";
import { RiMastercardLine } from "react-icons/ri";
import { SiVisa } from "react-icons/si";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center bg-blue-900 min-h-screen py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-4/5 lg:w-5/5">
          {/* Customer's Address */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">CUSTOMER'S ADDRESS</h2>
              <button className="text-blue-600">Change &gt;</button>
            </div>
            <h4 className="font-medium mt-2">Fola Shade</h4>
            <p className="text-sm">
              Plot 7, Aduloju Estate, Akobo | Ibadan, Oyo | +23408302839
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-4 rounded-lg lg:row-span-2">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <hr className="my-2" />
            <div className="flex justify-between">
              <h4>Items total</h4>
              <h4>₦{totalAmount.toLocaleString()}</h4>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <h4>Delivery Fee</h4>
              <h4>₦500</h4>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <h4>Total</h4>
              <h4>₦{(totalAmount + 500).toLocaleString()}</h4>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <button className="border border-gray-400 p-2">
                COUPON CODE
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded">
                APPLY
              </button>
            </div>
            <Link to="PaymentModal">
              <button className="bg-blue-800 text-white w-full py-3 rounded">
                CONFIRM ORDER
              </button>
            </Link>
          </div>
          {/* Delivery Details */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">DELIVERY DETAILS</h3>
              <button className="text-blue-600">Change &gt;</button>
            </div>
            <h4 className="font-medium mt-2">Doorstep Delivery</h4>
            <p className="text-sm">Delivery between Oct 15th and Oct 19th</p>
          </div>

          {/* Choose a Payment Method */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-lg mb-2">CHOOSE A PAYMENT METHOD</h2>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <input type="radio" id="ussd" name="payment" className="mr-2" />
                <label htmlFor="ussd" className="text-lg">
                  Pay with USSD or Bank Transfer
                </label>
                <div className="ml-auto flex space-x-2">
                  <BsShop className="text-blue-600" />
                  <IoCalculatorOutline className="text-blue-600" />
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex items-center">
                <input type="radio" id="card" name="payment" className="mr-2" />
                <label htmlFor="card" className="text-lg">
                  Pay with MasterCard or Visa Card
                </label>
                <div className="ml-auto flex space-x-2">
                  <RiMastercardLine className="text-blue-600" />
                  <SiVisa className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button
          type="submit"
          className="bg-blue-800 text-white mt-6 px-8 py-4 rounded-lg"
        >
          MAKE PAYMENT: ₦{totalAmount.toLocaleString()}
        </button>

        {/* Warning */}
        <p className="text-red-500 text-sm mt-4">
          Do Not send your own Password, Pin, CVV or card details to any email
          or phone number.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
