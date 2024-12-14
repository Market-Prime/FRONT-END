import React from 'react';
import logo from "../../assets/Logo 1.png";

const VendorsVerifyEmail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg px-10 py-8 max-w-md w-full text-center">
        <img src={logo} alt="Market Prime" className="mx-auto mb-6" />

        <h2 className="text-xl font-semibold mb-2">Thanks for signing up</h2>
        <p className="text-gray-600 mb-8">
          Click the link below to verify your email and complete your account setup.
        </p>

        <button className="bg-blue-600 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-700 transition">
          Verify
        </button>

        <p className="text-sm text-gray-600 mt-6">
          Didn’t get the mail?{' '}
          <a href="/resend" className="text-blue-600 hover:underline">
            Resend Email
          </a>
        </p>

        <div className="flex justify-between text-xs text-gray-500 mt-10">
          <a href="/terms" className="hover:underline">Terms of use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/support" className="hover:underline">Customer Service</a>
        </div>
      </div>
    </div>
  );
};

export default VendorsVerifyEmail;
