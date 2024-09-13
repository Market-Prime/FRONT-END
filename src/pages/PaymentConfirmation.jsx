import React from 'react';
import './PaymentConfirmation.css';
import icon from"../assets/Check_ring_duotone_line.png"

const PaymentConfirmation = () => {
    return (
        <div className="payment-confirmation-container">
            <div className="payment-confirmation-modal">
                <h2>Checkout</h2>
                <div className="confirmation-message">
                <img  src={icon} alt="icon" />
                    <h1> <strong>Thank you for ordering from our store.</strong></h1>
                    <p>Your payment has been made and the order is processing. Your order Number is <strong>#22245780</strong>.</p>
                    <p>The summary of your order, receipt, and shipping details will be sent to you via Email and SMS.</p>
                    <p><strong>#102,500 paid using Debit card</strong></p>
                    <p>Delivery between <strong>Oct, 15th</strong> and <strong>Oct, 19th</strong></p>
                </div>
                <button className="back-home-button">Back to Homepage</button>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
