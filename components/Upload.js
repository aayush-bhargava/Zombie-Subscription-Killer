import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload = () => {
        if (file) {
            // Simulate upload success
            onUpload();
            navigate('/dashboard');
        }
    };

    return (
        <div style={{ padding: '2rem', background: '#222', color: '#fff', minHeight: '100vh' }}>
           <center> <h2>📄 Upload Your Bank Statement or Subscription PDF</h2>
            <input type="file" onChange={e => setFile(e.target.files[0])} style={{ marginTop: '1rem' }} />
            <br />
            <button onClick={handleUpload} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#00ffc3', border: 'none' }}>
                Upload & Continue
            </button></center>
        </div>
    );
};

export default Upload;
