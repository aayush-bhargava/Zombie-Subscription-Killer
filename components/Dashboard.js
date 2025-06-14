import React from 'react';

const Dashboard = () => {
    return (
        <center>
        <div style={{ padding: '2rem', background: '#111', color: '#fff', minHeight: '100vh' }}>
            <h2>🧾 Your Zombie Subscriptions</h2>
            <p>Here are the sample recurring charges found from your uploaded file:</p>

            <ul>
                <li>🔁 Netflix - ₹499/month</li>
                <li>🔁 Spotify - ₹119/month</li>
                <li>🔁 YouTube Premium - ₹129/month</li>
                <li>🔁 Adobe CC - ₹999/month</li>
            </ul>

            <p style={{ marginTop: '2rem' }}>💡 Tip: Cancel the ones you no longer use!</p>
        </div>
        </center>
    );
};

export default Dashboard;
