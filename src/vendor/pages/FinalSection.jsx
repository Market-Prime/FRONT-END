import React, { useState } from 'react';

const FinalSection = () => {
  const [file1Uploaded, setFile1Uploaded] = useState(true);
  const [file2Uploaded, setFile2Uploaded] = useState(false);
  const [file2Progress, setFile2Progress] = useState(30);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg px-10 py-8 max-w-lg w-full text-center">
        <h2 className="text-blue-900 text-xl font-semibold mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-blue-800 mb-6">
          You have successfully verified your email. Kindly upload your NIN and CAC documents below to complete your registration.
        </p>

        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 mb-6">
          <p className="text-gray-600 mb-4">Drag & drop files or <span className="text-blue-600 cursor-pointer">Browse</span></p>
          <p className="text-sm text-gray-400">Supported formats: JPEG, PNG, PDF, GIF (not more than 5MB)</p>
        </div>

        {/* First File Progress */}
        {file1Uploaded && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">NIN_SBEpire.pdf</span>
              <span className="text-gray-400">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <span className="text-green-600 mt-2 block">✔ Uploaded</span>
          </div>
        )}

        {/* Second File Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">CAC Cert_SBEpire.pdf</span>
            <span className="text-gray-400">50%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${file2Progress}%` }}></div>
          </div>
          {!file2Uploaded && <span className="text-red-600 mt-2 block">⏳ Uploading...</span>}
        </div>

        <button className="bg-blue-900 text-white rounded-lg px-6 py-2 font-medium hover:bg-blue-700 transition">
          Submit
        </button>

        <div className="flex justify-between text-xs text-gray-500 mt-10">
          <a href="/terms" className="hover:underline">Terms of use</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/support" className="hover:underline">Customer Service</a>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
