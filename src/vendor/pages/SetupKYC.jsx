import { useState } from "react";
import logo from "/src/assets/Logo 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetupKYC = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    cacFile: null,
    ninFile: null,
  });

  // Handle file input change
  const handleInputChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0], // Update the state for the file input
    }));
  };

  // Submit KYC data
  const submitKYC = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Prepare form data for submission
      const data = new FormData();
      data.append("cacFile", formData.cacFile);
      data.append("ninFile", formData.ninFile);

      const response = await axios.post(
        `https://backend-server-0ddt.onrender.com/api/account/vendor/setup/kyc/`,
        data
      );

      toast.success(
        response.data.message ||
          "KYC submission successful. Please wait for verification.",
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
        navigate("/kyc-confirmation");
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
            Vendor Account Setup KYC
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your business details to complete your KYC.
          </p>
        </div>
        <form className="space-y-6" onSubmit={submitKYC}>
          {" "}
          {/* Use onSubmit instead of onClick */}
          {[
            { name: "cacFile", label: "Upload CAC File", type: "file" },
            { name: "ninFile", label: "Upload NIN File", type: "file" },
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
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                onChange={handleInputChange} // Attach handleInputChange to the onChange event
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-3 mt-6 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Submit KYC
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupKYC;
