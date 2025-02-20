// frontend/src/components/LogoutButton.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './logoutButton.css';

const LogoutButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleInitialClick = () => {
    setShowPopup(true);
  };

  const handleConfirmLogout = async () => {
    try {
      await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      setShowPopup(false);
      navigate('/login');
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="logout-container">
      <button 
        onClick={handleInitialClick}
        className="logout-btn"
      >
        <span className="btn-text">Logout</span>
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3 className="popup-title">Are you sure?</h3>
            <p className="popup-message">Do you really want to logout?</p>
            <div className="popup-buttons">
              <button 
                onClick={handleConfirmLogout}
                className="confirm-btn"
              >
                Yes, Logout
              </button>
              <button 
                onClick={handleCancel}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;