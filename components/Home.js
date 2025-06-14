import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email && password) {
            onLogin();
            navigate('/upload');
        }
    };

    return (
        <div style={{ background: '#111', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'Arial' }}>
            <center>
                <h1 style={{ fontSize: '3rem', color: '#00ffc3' }}>🧟 ZOMBIE SUBSCRIPTION KILLER</h1>

            <p style={{ marginTop: '1rem', maxWidth: '600px' }}>
                Stop wasting money on subscriptions you forgot!
            </p>
            <div style={{ marginTop: '2rem' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ padding: '0.5rem', marginRight: '1rem' }}
                />
                <button onClick={handleLogin} style={{ padding: '0.5rem 1rem', background: '#00ffc3', border: 'none' }}>
                    Login / Sign Up
                </button>
                <h2>👨‍💻 Built by Aayush Bhargava</h2>
                <p>Email: aayushbhargava71@gmail.com</p>
                <p>
                    This app is designed for people who unknowingly bleed money through unwanted subscriptions.
                    It uses smart parsing of PDFs or bank data to show you which subs are “killing” your budget —
                    and you get the control back.
                </p>
            </div></center>
        </div>
    );
};

export default Home;
