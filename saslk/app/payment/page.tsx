'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const PaymentPage = () => {
    const [step, setStep] = useState(1);
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        amount: '5000',
        notes: ''
    });

    const containerStyle: React.CSSProperties = {
        padding: '2rem 2rem 6rem',
        maxWidth: '800px', // Constrain width for better focus
        margin: '0 auto',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '3rem',
        width: '100%',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-outfit), sans-serif',
    };

    // Progress Bar Styles
    const progressContainerStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '400px',
        height: '4px',
        background: 'rgba(0,0,0,0.1)',
        borderRadius: '2px',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
    };

    const progressBarStyle: React.CSSProperties = {
        height: '100%',
        background: '#000',
        width: step === 1 ? '50%' : '100%',
        transition: 'width 0.3s ease',
    };

    // List Styles
    const listStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
    };

    const itemStyle = (isSelected: boolean): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: isSelected ? '2px solid #000' : '1px solid rgba(0,0,0,0.1)',
        background: isSelected ? 'rgba(0,0,0,0.02)' : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        gap: '1.5rem',
    });

    const radioStyle = (isSelected: boolean): React.CSSProperties => ({
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: isSelected ? '6px solid #000' : '2px solid #ccc',
        transition: 'all 0.2s ease',
        flexShrink: 0,
    });

    // Form Styles
    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
    };

    const inputGroupStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-secondary)',
    };

    const inputStyle: React.CSSProperties = {
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(0,0,0,0.1)',
        background: 'transparent',
        fontSize: '1rem',
        fontFamily: 'inherit',
        outline: 'none',
    };

    // Navigation Buttons
    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '3rem',
        gap: '1rem',
    };

    const actionButtonStyle = (variant: 'primary' | 'secondary', disabled: boolean = false): React.CSSProperties => ({
        padding: '1rem 2.5rem',
        borderRadius: 'var(--radius-full)',
        border: variant === 'primary' ? 'none' : '1px solid rgba(0,0,0,0.2)',
        background: variant === 'primary' ? '#000' : 'transparent',
        color: variant === 'primary' ? '#fff' : '#000',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
        flex: 1,
        maxWidth: '200px',
        textAlign: 'center',
    });

    const paymentMethods = [
        {
            id: 'card',
            title: 'Credit / Debit Card',
            description: 'Secure instant payment via Visa, Mastercard, AMEX',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
            )
        },
        {
            id: 'qr',
            title: 'QR Payment',
            description: 'Scan & Pay instantly with your preferred wallet',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                </svg>
            )
        },
        {
            id: 'bank',
            title: 'Bank Transfer',
            description: 'Direct transfer to our corporate account',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V7l8-5 8 5v14M10 21V11h4v10" />
                </svg>
            )
        }
    ];

    const [hash, setHash] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleNext = async () => {
        if (step === 1 && selectedMethod) {
            setStep(2);
            window.scrollTo(0, 0);
        } else if (step === 2) {
            if (selectedMethod === 'card') {
                if (!formData.amount || isNaN(parseFloat(formData.amount)) || parseFloat(formData.amount) <= 0) {
                    alert('Please enter a valid amount.');
                    return;
                }

                // Format amount strictly for PayHere (needs 2 decimals)
                const formattedAmount = parseFloat(formData.amount).toFixed(2);

                try {
                    // Generate Order ID
                    const newOrderId = `ORD-${Date.now()}`;
                    setOrderId(newOrderId);

                    // Fetch Hash from API
                    const response = await fetch('/api/payhere/hash', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            order_id: newOrderId,
                            amount: formattedAmount, // Send strict formatted amount
                            currency: 'LKR'
                        })
                    });

                    const data = await response.json();

                    if (data.hash) {
                        setHash(data.hash);

                        // Check if PayHere SDK is loaded
                        // @ts-ignore
                        if (typeof window.payhere === 'undefined') {
                            alert("Payment system is loading. Please wait a moment and try again.");
                            return;
                        }

                        // Prepare PayHere Payment Object
                        const payment = {
                            "sandbox": true,
                            "merchant_id": process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
                            "return_url": undefined,     // Important: must be undefined for JS SDK
                            "cancel_url": undefined,     // Important: must be undefined for JS SDK
                            "notify_url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/payhere/notify`,
                            "order_id": newOrderId,
                            "items": "Consultation / Service Deposit",
                            "amount": formattedAmount,
                            "currency": "LKR",
                            "hash": data.hash,
                            "first_name": formData.name.split(' ')[0] || '',
                            "last_name": formData.name.split(' ').slice(1).join(' ') || '',
                            "email": formData.email,
                            "phone": formData.phone,
                            "address": "No.1, Software Lane",
                            "city": "Colombo",
                            "country": "Sri Lanka",
                        };

                        // PayHere SDK Event Handlers
                        // @ts-ignore
                        window.payhere.onCompleted = function onCompleted(orderId) {
                            console.log("Payment completed. OrderID:" + orderId);
                            alert("Payment Completed! Order ID: " + orderId);
                            // Verify payment status with your backend here
                        };

                        // @ts-ignore
                        window.payhere.onDismissed = function onDismissed() {
                            console.log("Payment dismissed");
                        };

                        // @ts-ignore
                        window.payhere.onError = function onError(error) {
                            console.log("Error:" + error);
                            alert("Payment Error: " + error);
                        };

                        // Start Payment
                        // @ts-ignore
                        window.payhere.startPayment(payment);

                    } else {
                        alert('Payment initialization failed. Please try again.');
                    }
                } catch (err) {
                    console.error('Payment Error:', err);
                    alert('Something went wrong. Please try again.');
                }
            } else {
                // Handle other methods (QR, Bank)
                alert('Thank you! We will contact you shortly with ' + selectedMethod + ' payment details.');
            }
        }
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div style={{ background: 'var(--bg-secondary)', minHeight: '100%' }}>
            {/* Load PayHere SDK Script - Load immediately after page becomes interactive */}
            <Script
                src="https://www.payhere.lk/lib/payhere.js"
                strategy="afterInteractive"
            />

            <main style={containerStyle}>
                {/* Header */}
                <div style={headerStyle} className="animate-fade-in-up">
                    <h1 style={titleStyle}>
                        {step === 1 ? 'Select Payment' : 'Billing Details'}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {step === 1 ? 'Choose how you would like to pay' : 'Please fill in your information'}
                    </p>
                </div>

                {/* No hidden form needed for JS SDK */}

                {/* Progress Bar */}
                <div style={progressContainerStyle}>
                    <div style={progressBarStyle} />
                </div>

                {/* Content */}
                <div style={{ width: '100%', flex: 1 }} className="animate-fade-in-up">
                    {step === 1 ? (
                        <div style={listStyle}>
                            {paymentMethods.map((method) => (
                                <div
                                    key={method.id}
                                    style={itemStyle(selectedMethod === method.id)}
                                    onClick={() => setSelectedMethod(method.id)}
                                >
                                    <div style={radioStyle(selectedMethod === method.id)} />
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.05)',
                                        color: '#000'
                                    }}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                                            {method.title}
                                        </h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={formStyle}>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Amount (LKR)</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>Additional Notes</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                                    placeholder="Any specific requests?"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div style={buttonContainerStyle} className="animate-fade-in-up">
                    <button
                        onClick={handleBack}
                        style={{
                            ...actionButtonStyle('secondary'),
                            visibility: step === 1 ? 'hidden' : 'visible'
                        }}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={step === 1 && !selectedMethod}
                        style={actionButtonStyle('primary', step === 1 && !selectedMethod)}
                    >
                        {step === 1 ? 'Continue' : 'Proceed to Pay'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PaymentPage;
