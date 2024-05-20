import React from 'react';
import { Link } from 'react-router-dom';

const Unlog = () => {
  const handleLogout = () => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, remove it from local storage
      localStorage.removeItem('token');
    }
  };

  return (
    <div className="flex justify-center items-center" style={{ height: '10vh' }}> {/* Use inline styles to set height to 10vh */}
      <Link to="/login" onClick={handleLogout} className="text-teal font-semibold">Logout</Link>
    </div>
  );
};

export default Unlog;
