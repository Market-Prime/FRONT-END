import React from 'react';
import './PaymentModal.css';

const PaymentModal = () => {
  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <h2 className="payment-heading">You are paying with</h2>
        <div className="card-details">
          <div className="card-info">
            <span className="card-type">Mastercard XXXX-2222</span>
            <span className="card-expiry">Exp: 01/25</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="Mastercard Logo"
              className="card-logo"
            />
          </div>
          <button className="pay-button">Pay Now: #102,500</button>
        </div>
        <p className="security-note">
          Do NOT send your Password, PIN, CVV or card details to any email or phone number.
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
