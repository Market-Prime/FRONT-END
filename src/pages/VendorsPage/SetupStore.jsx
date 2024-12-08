import { useState, useEffect } from "react";
import logo from "/src/assets/Logo 1.png";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import banksData from "./banks.json"; // Import the JSON file

const SetupStore = () => {
  const navigate = useNavigate();

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

  const [banks, setBanks] = useState([]); // State to store the list of banks

  // Populate banks from the JSON file
  useEffect(() => {
    setBanks(banksData); // Use data from JSON
  }, []);

  // Handle input changes for text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle bank selection and set bankCode
  const handleBankChange = (e) => {
    const selectedBank = banks.find((bank) => bank.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      bankName: e.target.value,
      bankCode: selectedBank?.code || "",
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0], // Store the first file
    }));
  };

  const submitStoreData = async (e) => {
    e.preventDefault();

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
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(
        response.data.message || "Store details submitted successfully.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );

      setTimeout(() => {
        navigate("/store-confirmation");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "An error occurred while submitting the form.";

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <ToastContainer />
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-transform duration-300">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <form onSubmit={submitStoreData}>
          {/* Bank Name */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Bank Name</label>
            <select
              name="bankName"
              value={formData.bankName}
              onChange={handleBankChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select a bank</option>
              {banks.map((bank) => (
                <option key={bank.code} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>

          {/* Account Number */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Account Holder Name */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Business Address */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Business Address</label>
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Business Description */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">
              Business Description
            </label>
            <textarea
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>

          {/* Niches */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Niches</label>
            <input
              type="text"
              name="niches"
              value={formData.niches}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Store Logo */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Store Logo</label>
            <input
              type="file"
              name="storeLogo"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
              accept="image/*"
            />
          </div>

          {/* Store Splash Image */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">
              Store Splash Image
            </label>
            <input
              type="file"
              name="storeSplashImage"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupStore;
