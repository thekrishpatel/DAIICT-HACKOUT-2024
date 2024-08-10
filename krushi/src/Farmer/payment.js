import React, { useState } from "react";
import "./payment.css";

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [atmPin, setAtmPin] = useState("");
    const [validThru, setValidThru] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [upiPin, setUpiPin] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        const cardValidation = cardNumber.length === 12 && cvv.length === 3 && atmPin.length === 4 && validThru.match(/^\d{4}-\d{2}$/);
        const upiValidation = phoneNumber.length === 10 && (upiPin.length === 4 || upiPin.length === 6);

        if ((paymentMethod === "debit" || paymentMethod === "credit") && !cardValidation) {
            alert("Please fill out all card fields correctly.");
            return;
        }

        if (paymentMethod === "upi" && !upiValidation) {
            alert("Please fill out all UPI fields correctly.");
            return;
        }

        // Set payment success message and reset fields
        setPaymentSuccess(true);

        // Clear all fields after a short delay
        setTimeout(() => {
            setPaymentMethod("");
            setCardNumber("");
            setCvv("");
            setAtmPin("");
            setValidThru("");
            setPhoneNumber("");
            setUpiPin("");
            setPaymentSuccess(false); // Optionally hide the success message
        }, 3000); // Adjust delay as needed
    };

    const currentYear = new Date().getFullYear();
    const minYear = currentYear;
    const maxYear = currentYear + 10;

    const minMonth = `${minYear}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`;
    const maxMonth = `${maxYear}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`;

    return (
        <div className="payment-container">
            <h1>Make a Payment</h1>
            <div className="payment-methods">
                <button onClick={() => setPaymentMethod("upi")} className={paymentMethod === "upi" ? "active" : ""}>UPI</button>
                <button onClick={() => setPaymentMethod("debit")} className={paymentMethod === "debit" ? "active" : ""}>Debit Card</button>
                <button onClick={() => setPaymentMethod("credit")} className={paymentMethod === "credit" ? "active" : ""}>Credit Card</button>
            </div>

            {(paymentMethod === "debit" || paymentMethod === "credit") && (
                <div className="card-details">
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        maxLength="12"
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        maxLength="3"
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    />
                    <input
                        type="password"
                        placeholder="ATM PIN"
                        value={atmPin}
                        maxLength="4"
                        onChange={(e) => setAtmPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    />
                    <input
                        type="month"
                        placeholder="Valid Thru"
                        value={validThru}
                        onChange={(e) => setValidThru(e.target.value)}
                        min={minMonth}
                        max={maxMonth}
                    />
                </div>
            )}

            {paymentMethod === "upi" && (
                <div className="upi-details">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        maxLength="10"
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    />
                    <input
                        type="password"
                        placeholder="UPI PIN"
                        value={upiPin}
                        maxLength="6"
                        onChange={(e) => setUpiPin(e.target.value.replace(/\D/g, ""))}
                    />
                </div>
            )}

            <button className="make-payment-btn" onClick={handlePayment}>Make Payment</button>

            {paymentSuccess && (
                <div className="payment-success">
                    <span className="success-icon">✔</span>
                    <p>Payment Successful!</p>
                </div>
            )}
        </div>
    );
}

export default Payment;
