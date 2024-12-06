import { useState } from "react";
import logo from "/src/assets/Logo 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetupStore = () => {
  const navigate = useNavigate();

  // State for form data including the new fields
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    bankCode: "",
    bankType: "",
    businessAddress: "",
    businessDescription: "",
    storeLogo: null,
    storeSplashImage: null,
    niches: "",
  });

  // Handle input change for text and file inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0], // Store the first file from the file input
    }));
  };

  // Submit Store data
  const submitStoreData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare form data for submission
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        `https://backend-server-0ddt.onrender.com/api/account/vendor/setup/store/`,
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Use multipart/form-data for file uploads
          },
        }
      );

      toast.success(
        response.data.message || "Store details submission successful.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: { backgroundColor: "green" },
        }
      );

      // Navigate to confirmation page
      setTimeout(() => {
        navigate("/store-confirmation");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : error.message;

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: { backgroundColor: "red" },
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <ToastContainer />
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-transform duration-300">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Market Prime Logo"
            className="w-16 mx-auto mb-4 rounded-full shadow-md"
          />
          <h2 className="text-3xl font-bold text-blue-800">
            Vendor Account Setup (Store Details)
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your business and bank details to complete your setup.
          </p>
        </div>
        <form className="space-y-6" onSubmit={submitStoreData}>
          {[
            // Bank details
            { name: "bankName", label: "Bank Name", type: "text" },
            { name: "accountNumber", label: "Account Number", type: "text" },
            {
              name: "accountHolderName",
              label: "Account Holder Name",
              type: "text",
            },
            { name: "bankCode", label: "Bank Code", type: "text" },
            { name: "bankType", label: "Bank Type", type: "text" },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-gray-700 font-semibold"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          {/* Business Address */}
          <div>
            <label
              htmlFor="businessAddress"
              className="block text-gray-700 font-semibold"
            >
              Business Address
            </label>
            <input
              type="text"
              name="businessAddress"
              id="businessAddress"
              value={formData.businessAddress}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Business Description */}
          <div>
            <label
              htmlFor="businessDescription"
              className="block text-gray-700 font-semibold"
            >
              Business Description
            </label>
            <textarea
              name="businessDescription"
              id="businessDescription"
              value={formData.businessDescription}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Store Logo */}
          <div>
            <label
              htmlFor="storeLogo"
              className="block text-gray-700 font-semibold"
            >
              Store Logo
            </label>
            <input
              type="file"
              name="storeLogo"
              id="storeLogo"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Store Splash Image */}
          <div>
            <label
              htmlFor="storeSplashImage"
              className="block text-gray-700 font-semibold"
            >
              Store Splash Image
            </label>
            <input
              type="file"
              name="storeSplashImage"
              id="storeSplashImage"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Niches */}
          <div>
            <label
              htmlFor="niches"
              className="block text-gray-700 font-semibold"
            >
              Niches (comma separated)
            </label>
            <input
              type="text"
              name="niches"
              id="niches"
              value={formData.niches}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Submit Store Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupStore;
