import React from 'react';
import './ConnectButton.css'; // Import the CSS file

const ConnectButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="connect-button">
      Connect to Wallet
    </button>
  );
};

export default ConnectButton;