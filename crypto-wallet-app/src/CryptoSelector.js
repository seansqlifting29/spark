import React from 'react';
import './CryptoSelector.css';

const CryptoSelector = ({ onSelect, selectedCrypto }) => {
  const cryptocurrencies = ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Cardano'];

  return (
    <div className="crypto-selector">
      {cryptocurrencies.map((crypto) => (
        <button
          key={crypto}
          className={`crypto-button ${selectedCrypto === crypto ? 'selected' : ''}`}
          onClick={() => onSelect(crypto)}
        >
          {crypto}
        </button>
      ))}
    </div>
  );
};

export default CryptoSelector;