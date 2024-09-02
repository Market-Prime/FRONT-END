import React from 'react';
import './EmailConfirmation.css';

const EmailConfirmation = () => {
    return (
        <div className="confirmation-container">
            <div className="confirmation-card">
                <div className="confirmation-icon">
                    <img src="https://s3-alpha-sig.figma.com/img/b8d6/4c80/876e1a22e185e53553fe306f4fd17191?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Roj0zumW7X89R5-6epZA8a5jPTbAsnLnMXZEm34rzVK3mUTojmTCkossh9rHeGuQwPO30-vTPa2TtMWmemSbJnVnwq~FTs7vGknCWexW-0wNMs4~OkYdnFcfHasSsxb5SNERlIqibsL5ljwu1HdhgoZY4W~3S468Ef170FTqyzUfK-t3pL-XNsAdlJ3t4Xnf9ESY-oIiMSUkvsBUC8ehWVSk4nRkPJcSfnEl5ATxHuL0nPGxEC7bIRnsn47MNdnicbc1Mh~ioUWS0uY3TWe-HzDroqHQNUveTan-Xi8QtFssvZWed6ySmHeYtxPaFzn0BC~h8uxviyDCyIo44OyItg__" alt="Email Icon" />
                </div>
                <p>You have successfully verified your account.</p>
                <button className="continue-button">Continue to Cart</button>
            </div>
            <div className="footer-links">
                <a href="/terms">Terms of use</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/customer-service">Customer Service</a>
            </div>
        </div>
    );
}

export default EmailConfirmation;
